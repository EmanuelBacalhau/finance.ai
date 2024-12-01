# Finance.AI - Backend

Este repositório contém o backend do projeto **Finance.AI**, uma aplicação voltada para inteligência financeira que utiliza autenticação OAuth com o Google e outras tecnologias modernas para garantir segurança e escalabilidade.

## 📋 Sumário

- [Recursos](#recursos)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Dependências](#dependências)
- [Contribuindo](#contribuindo)

## 📦 Recursos

- **Autenticação OAuth 2.0 com o Google**: Permite login seguro de usuários.
- **API RESTful**: Fornece endpoints para gerenciar usuários e transações.
- **Sistema de Token JWT**: Garante segurança na comunicação entre cliente e servidor.
- **Banco de Dados com Prisma**: Gerenciamento robusto de dados para escalar a aplicação.

## 🔧 Configuração

### Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Prisma CLI](https://www.prisma.io/)
- [Google Developer Console](https://console.developers.google.com/) para obter as credenciais de OAuth.

### Variáveis de Ambiente

As variáveis de ambiente são configuradas no arquivo `src/env.ts`. Certifique-se de preencher os valores no arquivo `.env` na raiz do projeto:

```plaintext
PORT=3333
DATABASE_URL=<sua_url_do_banco_de_dados>
GOOGLE_CLIENT_ID=<sua_google_client_id>
GOOGLE_CLIENT_SECRET=<sua_google_client_secret>
BASE_URL=<url_base_da_aplicação>
JWT_SECRET=<sua_chave_secreta>
```

🚀 Como Usar

```plaintext
prisma/
src/
├── @types/
├── libs/
├── utils/
├── config/
│   ├── providers/
│   │   └── google-oauth-provider.ts
├── controllers/
│   └── auth/
│       └── google.ts
├── env.ts
├── repositories/
│   ├── interfaces/
│   │   └── i-user-repository.ts
│   └── prisma/
│       └── user-prisma.repository.ts
├── routes/
│   ├── authRouter.ts
│   └── router.ts
├── services/
│   └── auth/
│       └── google.ts
├── container.ts
└── main.ts
```

### 🚀 Como Usar

1. Instale as dependências:

```bash
  npm install
  # ou
  pnpm install
  # ou
  yarn install
```

2. Execute as migrações do Prisma:

```bash
  npx prisma migrate dev
  # ou
  pnpm prisma migrate dev
  # ou
  yarn prisma migrate dev
```

3. Inicie o servidor:

```bash
  npm run start:dev
  # ou
  pnpm start:dev
  # ou
  yarn start:dev
```

4. Inicie o servidor:

- /login/google: Redireciona para o fluxo de autenticação com o Google.
- /login/google/callback: Manipula o retorno do Google com os dados do usuário autenticado.
- Endpoints adicionais para gerenciar transações financeiras estarão disponíveis em versões futuras.

### 🛠️ Dependências

- Framework: Fastify
- OAuth: @fastify/oauth2
- Autenticação JWT: @fastify/jwt
- Banco de Dados: Prisma

### 🤝 Contribuindo

Contribuições são bem-vindas! Crie um fork, submeta suas alterações e envie um pull request.
