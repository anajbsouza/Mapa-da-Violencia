## Sumário

- [Requisitos](#requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Como testar o projeto](#como-testar-o-projeto)
- [Instalando o PostgreSQL](#instalando-o-postgresql)
- [Arquitetura](#arquitetura)


### Requisitos

- Para executar o projeto localmente, é necessário ter o PostgreSQL instalado e configurado na máquina. Consulte a seção [_Instalando o PostgreSQL_](#instalando-o-postgresql) para mais detalhes.

### Como rodar localmente

1. **Clone o repositório:**
   ```sh
   git clone <URL_DO_REPOSITORIO>
2. **Acesse a pasta backend**
    ```sh
    cd backend 
3. Copie o arquivo .env.example para um arquivo .env.

4. Edite o arquivo .env com seu usuário e senha do PostgreSQL
5. **Baixe as dependências**
    ```sh
    npm install
6. Execute as migrações prisma 
    ```sh
    npx prisma migrate dev
    ```
7. Preencha as tabelas base no PostgreSQL utilizando a o arquivo `/backend/src/sql files/preenchimento das tabelas` 

8. **Rode o projeto com**
    ```sh
    npm run dev
    ```
### Como testar o projeto
1. Baixe o Thunder Client (extensão do VS Code para fazer solicitações HTTPs)

2. Fazer uma nova requisição clicando em "New Request"

3. Configurar a solicitação (instruções para a acessar a rota de teste):
    ```ruby 
    Método GET
    Endereço : localhost:4000/health
    Aparecerá a mensagem "OK!"
    ```

### Instalando o PostgreSQL 
1. O tutorial de instalação está disponível em [Documentação PostgreSQL](https://www.postgresql.org/download/linux/ubuntu/)

2. É necessário criar um usuário com permissões de administrador (superuser)

3. [Tutorial de criação de usuário](https://phoenixnap.com/kb/postgres-create-user)
4. Criar o Banco de Dados chamado `Gloria`

5. Existem interfaces gráficas para o PostgreSQL, como o PgAdmin. Seu uso é opcional. 

### Arquitetura

- *Protocols*: Define os protocolos de comunicação e interfaces para interações externas, como APIs de terceiros ou sistemas legados.

- *Middlewares*: Funções intermediárias que interceptam as requisições HTTP antes que elas alcancem os manipuladores de rotas. 

- *Errors*: Módulo que lida com a gestão de erros na aplicação, capturando exceções e fornecendo respostas adequadas.

- *Helper*: Funções auxiliares.

- *Schemas*: Esquemas de validação de dados.

- *App*: Ponto de entrada da aplicação, onde estão configurados e agrupados todos os componentes para inicialização do servidor.

- *Routers*: Responsáveis por definir as rotas da aplicação.

- *Controllers*: Responsáveis por receber as requisições HTTP, lidar com os dados da requisição, chamar os serviços apropriados e enviar a resposta de volta ao cliente.

- *Services*: Implementam a lógica de negócios da aplicação, coordenando a interação entre os diferentes componentes e realizando operações específicas.

- *Repositories*: Camada responsável por realizar operações de leitura e escrita no banco de dados.
