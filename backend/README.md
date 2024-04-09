## Como rodar o projeto?

- Acesse a pasta backend: 
`cd Code`
`cd backend`
- Baixe as dependências: 
`npm install`
- Execute o projeto:
`npm run dev`

## Como testar o projeto?
- Baixe o Thunder Client (extensão do VS Code para fazer solicitações HTTPs)
- Fazer uma nova requisição clicando em "New Request"
- Configurar a solicitação (instruções para a acessar a rota de teste):
- - Método GET
- - Endereço: localhost:4000/health
- Aparecerá a mensagem "OK!"

## Como conectar no Banco de datos
- Baixe o PostgreSQL (talvez possa ser outro mas esse é o que eu tô usando) https://www.postgresql.org/download/linux/ubuntu/

OBS: tem um incluso no ubuntu, mas eu não lembro qual eu usei rsrs

- Se quiser usar pelo terminal, basta criar um usuário. Se quiser usar o um software para visualizar melhor o banco, baixe o pgAdmin: https://www.youtube.com/watch?v=LObmSDf9p6Y

### No pgAdmin
- Crie um servidor conforme mostraram no vídeo (o nome não importa)
- Crie um database com o nome: Gloria
- Abra uma query 
- Copie da linha 29 pra frente do arquivo sql files\database_structure 
- Clique F5

Pronto! Seu database já está estruturado, se quiser ver as tabelas vá em:

Gloria>Schemas>Tables clique com a direita na tabela que quer ver, vá em Scripts>SELECT Script 

OU

Abra um query e escreva

`SELECT * FROM 'tableName'`

Onde tableName é o nome da tabela que deseja visualizar. 


### Conectando com o backend
Faça `npm i` nessa branch para instalar as libs utilizadas para a conexão

No arquivo .env escreva:

```
DATABASE_URL="postgresql://nomeusuario:suasenha@localhost:5432/Gloria?schema=public"
```

Substitua `nomeusuario` e `suasenha` pelos dados que usou ao instalar o PostgreSQL.

Na pasta prisma tem o schema do banco, utilizado para questões de validação. 

No arquivo src\repositories\answers-repository.ts criei uma função que recebe o nome de uma tabela e imprime ela. Ela é chamada em src\repositories\answers-controller.ts. Nesse arquivo você pode alterar o nome da tabela que deseja mudar o nome. 

Para rodar basta escrever `npm run dev` e você vai ver os dados da tabela selecionada (no caso nada se você não adicionar manualmente no pgAdmin), ainda irei criar a função que adiciona. 

É isso ;)

## Objetivo dos Componentes do Projeto

### Arquitetura
A arquitetura de um software se refere à estrutura geral do sistema, incluindo como os componentes são organizados, interagem e se comunicam entre si. A arquitetura define a divisão de responsabilidades, a separação de preocupações e outros aspectos importantes do design de software.

- **Protocols**: Define os protocolos de comunicação e interfaces para interações externas, como APIs de terceiros ou sistemas legados.
- **Middlewares**: Funções intermediárias que interceptam as requisições HTTP antes que elas alcancem os manipuladores de rotas. Podem ser usados para realizar validações, autorizações, logging, entre outras tarefas.
- **Errors**: Módulo que lida com a gestão de erros na aplicação, capturando exceções e fornecendo respostas adequadas ao cliente.
- **Schemas**: Esquemas de validação de dados, usados principalmente para validar os dados de entrada em APIs.
#
- **App**: Ponto de entrada da aplicação, onde são configurados e agrupados todos os componentes para inicialização do servidor.
- **Routers**: Responsáveis por definir as rotas da aplicação, associar cada rota a um manipulador de requisição e exportar o roteador para ser utilizado no aplicativo principal.
- **Controllers**: Responsáveis por receber as requisições HTTP, lidar com os dados da requisição, chamar os serviços apropriados e enviar a resposta de volta ao cliente.
- **Services**: Implementam a lógica de negócios da aplicação, coordenando a interação entre os diferentes componentes e realizando operações específicas.
- **Repositories**: Camada responsável por realizar operações de leitura e escrita no banco de dados ou em qualquer outro meio de armazenamento de dados.



### node_modules
A pasta `node_modules` contém todas as dependências do seu projeto Node.js, incluindo bibliotecas de terceiros instaladas via npm (Node Package Manager). Essas dependências são instaladas automaticamente quando você executa o comando `npm install` ou `npm ci` e são gerenciadas pelo npm.

### .gitignore
O arquivo `.gitignore` é usado para especificar quais arquivos e pastas devem ser ignorados pelo Git, ou seja, não devem ser controlados ou versionados pelo sistema de controle de versão. Isso é útil para evitar que arquivos temporários, logs, arquivos gerados automaticamente e outras informações desnecessárias sejam incluídos no repositório Git.

### package.json
O arquivo `package.json` é um arquivo de metadados para projetos Node.js. Ele contém informações sobre o projeto, como nome, versão, descrição, scripts de execução, dependências e outras configurações importantes. O `package.json` é fundamental para o gerenciamento de dependências, scripts de construção e execução, bem como para compartilhar e distribuir o projeto.

### package-lock.json
O arquivo `package-lock.json` é gerado automaticamente pelo npm e registra a árvore exata de dependências instaladas em seu projeto, incluindo as versões específicas de cada dependência. Ele garante que as versões exatas das dependências sejam instaladas em diferentes ambientes e garante a consistência entre as instalações em diferentes máquinas.

### tsconfig.json
O arquivo `tsconfig.json` é usado para configurar as opções do compilador TypeScript (`tsc`). Ele define como o TypeScript compila o código TypeScript em JavaScript. O `tsconfig.json` permite configurar coisas como o alvo de compilação, o diretório de saída, as opções de módulo, as opções de tipo, entre outras configurações relacionadas à compilação TypeScript.



## Bibliotecas utilizadas

### DevDependencies

| Biblioteca                  | Descrição                                                                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `@types/express`            | Pacote de definições de tipos TypeScript para o Express.js, permitindo a escrita de código TypeScript para o Express.            |
| `@types/node`               | Pacote de definições de tipos TypeScript para o Node.js, permitindo a escrita de código TypeScript para o Node.js.                   |
| `dotenv`                    | Carrega variáveis de ambiente de um arquivo `.env` em um projeto Node.js, facilitando a configuração do ambiente de desenvolvimento. |
| `nodemon`                   | Monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor Node.js quando são detectadas mudanças.           |
| `ts-node`                   | Executa arquivos TypeScript diretamente no Node.js, sem a necessidade de compilar para JavaScript.                              |
| `ts-node-dev`               | Semelhante ao `nodemon`, mas para projetos TypeScript. Monitora alterações e reinicia o servidor ao detectar mudanças nos arquivos TypeScript.        |
| `typescript`                | Compilador TypeScript, que converte código TypeScript em JavaScript para ser executado no Node.js ou em navegadores.             |
| `typescript-transform-paths`| Uma biblioteca que fornece um transformador TypeScript para resolver caminhos de importação com base na configuração de mapeamento de caminhos.       |

### Dependencies

| Biblioteca                  | Descrição                                                                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `@types/bcrypt`             | Pacote de definições de tipos TypeScript para o `bcrypt`, permitindo a escrita de código TypeScript com suporte total ao `bcrypt`.      |
| `@types/cors`               | Pacote de definições de tipos TypeScript para o `cors`, permitindo a escrita de código TypeScript com suporte total ao `cors`.          |
| `@types/jsonwebtoken`       | Pacote de definições de tipos TypeScript para o `jsonwebtoken`, permitindo a escrita de código TypeScript com suporte total ao `jsonwebtoken`. |
| `bcrypt`                    | Biblioteca para hash de senhas, usada para criptografar senhas de forma segura antes de armazená-las em um banco de dados.            |
| `cors`                      | Middleware para Express.js que permite o controle de acesso a recursos de um servidor de domínios diferentes.                     |
| `express`                   | Framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.                                |
| `express-async-errors`      | Middleware para Express.js que facilita o tratamento de erros assíncronos, permitindo o uso de `try-catch` em funções assíncronas. |
| `http-status`               | Pacote que fornece um conjunto de códigos de status HTTP, facilitando a definição de respostas HTTP em seu servidor.              |
| `joi`                       | Biblioteca para validação de dados em JavaScript. É especialmente útil para validar dados de entrada em APIs.                     |
| `jsonwebtoken`              | Implementação de JSON Web Tokens (JWT) para Node.js, usada para autenticação e autorização em aplicativos web e APIs.               |
