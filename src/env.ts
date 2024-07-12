import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_BASE_URL: z.string().url(),
  WEB_BASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3333),
  SMTP_USER: z.string().email(),
  SMTP_PASSWORD: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
});

export const env = envSchema.parse(process.env);
