# Backend Project

## Descrição

Este é um projeto backend desenvolvido com Fastify, Prisma e outras tecnologias modernas. O objetivo do projeto é gerenciar viagens, participantes e atividades, fornecendo uma API para criar, confirmar e gerenciar esses recursos. O projeto foi desenvolvido durante a NLW da Rocketseat

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Fastify**: Framework web rápido e de baixo overhead para Node.js.
- **Prisma**: ORM para Node.js e TypeScript.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Zod**: Biblioteca de validação de esquemas.
- **Day.js**: Biblioteca para manipulação de datas.
- **Nodemailer**: Biblioteca para envio de emails.

## Como Rodar o Projeto Localmente

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/arthvm/plann.er-backend
   cd plann.er-backend
   ```

2. **Instale as dependências:**
  ```sh
  npm install
  ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo .env na raiz do projeto e adicione as variáveis necessárias. Veja o exemplo abaixo:
   ```json
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   API_BASE_URL="http://localhost:3000"
   WEB_BASE_URL="http://localhost:3000"
   ```
   
4. **Execute as migrações do Prisma:**
   ```sh
   npx prisma migrate dev
   ```

5. **Inicie o servidor:**
   ```sh
   npm run dev
   ```

## Rotas da API

### Criar Convite
- **Endpoint:** ==POST /trips/:tripId/invites==
- **Descrição:** Cria um convite para um participante em uma viagem.
- **Parâmetros:**
    - ==tripId== (UUID): ID da viagem.
- **Body:**
    - ==email== (string): Email do participante.
- **Exemplo de Resposta:**
    ```json
    {
      "participantId": "uuid-do-participante"
    }
    ```
### Confirmar Viagem
- **Endpoint:** ==POST /trips/:tripId/confirm==
- **Descrição:** Confirma a presença de um participante em uma viagem.
- **Parâmetros:**
    - ==tripId== (UUID): ID da viagem.
- **Exemplo de Resposta:**
  ```json
  {
    "message": "Viagem confirmada com sucesso."
  }
  ```
### Criar Atividade
- **Endpoint:** ==POST /activities==
- **Descrição:** Cria uma nova atividade.
- **Body:**
    - ==name== (string): Nome da atividade.
    - ==occurs_at== (string): Data e hora da atividade.
- **Exemplo de Resposta:**
  ```json
  {
  "activityId": "uuid-da-atividade"
  }
  ```

## Tratamento de Erros
Os erros são tratados pelo arquivo ==error-handler.ts==. Erros de validação são respondidos com status 400 e uma mensagem apropriada.
