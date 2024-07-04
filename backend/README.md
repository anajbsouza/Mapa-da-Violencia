## Como rodar o projeto localmente?

- Clone o repositório:
`git clone <URL_DO_REPOSITORIO>`
- Acesse a pasta backend: 
`cd backend`
- Copie o arquivo .ev.example para um arquivo .env.
- Edite o arquivo .env com as suas configurações.
- Baixe as dependências: 
`npm install`
- Execute as migrações do Prisma:
`npx prisma migrate dev`
- Execute o projeto:
`npm run dev`
