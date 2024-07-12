import "dayjs/locale/pt-br";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";
import { env } from "../env";

export async function confirmParticipant(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/participants/:participantId/confirm",
    {
      schema: {
        params: z.object({
          participantId: z.string().uuid(),
        }),
        body: z.object({
          participantName: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { participantId } = request.params;
      const { participantName } = request.body;

      const participant = await prisma.participant.findUnique({
        where: {
          id: participantId,
        },
      });

      if (!participant) {
        throw new ClientError("Participant not found.");
      }

      const redirectUrl = `${env.WEB_BASE_URL}/trips/${participant.trip_id}`;

      if (participant.is_confirmed) {
        return reply.send({ redirectUrl }).code(200);
      }

      await prisma.participant.update({
        where: {
          id: participantId,
        },
        data: {
          name: participantName,
          is_confirmed: true,
        },
      });

      return reply.send({ redirectUrl }).code(200);
    }
  );
}
