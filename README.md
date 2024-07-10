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
   ```
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
- **Endpoint:** <mark>POST /trips/:tripId/invites</mark>
- **Descrição:** Cria um convite para um participante em uma viagem.
- **Parâmetros:**
    - <mark>tripId</mark> (UUID): ID da viagem.
- **Body:**
    - <mark>email</mark> (string): Email do participante.
- **Exemplo de Resposta:**
    ```json
    {
      "participantId": "uuid-do-participante"
    }
    ```
### Confirmar Viagem
- **Endpoint:** <mark>POST /trips/:tripId/confirm</mark>
- **Descrição:** Confirma a presença de um participante em uma viagem.
- **Parâmetros:**
    - <mark>tripId</mark> (UUID): ID da viagem.
- **Exemplo de Resposta:**
  ```json
  {
    "message": "Viagem confirmada com sucesso."
  }
  ```
### Criar Atividade
- **Endpoint:** <mark>POST /activities</mark>
- **Descrição:** Cria uma nova atividade.
- **Body:**
    - <mark>name</mark> (string): Nome da atividade.
    - <mark>occurs_at</mark> (string): Data e hora da atividade.
- **Exemplo de Resposta:**
  ```json
  {
  "activityId": "uuid-da-atividade"
  }
  ```

## Tratamento de Erros
Os erros são tratados pelo arquivo <mark>error-handler.ts</mark>. Erros de validação são respondidos com status 400 e uma mensagem apropriada.
