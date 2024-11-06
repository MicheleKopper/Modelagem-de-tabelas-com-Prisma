<h1 align="center">✒️ Setup - Banco de Dados com Prisma</h1>

## Instalações

01 - Abrir o terminal e criar o arquivo package.json. Usar o -y para criar o arquivo default (padrão), sem personalização. O arquivo package.json contém as informações do projeto, como versões, dependências e scripts

```bash
npm init -y
```

02 - Instalar o typescript como dependência de desenvolvimento, as tipagens do node e executar o typescript

```bash
npm i -D typescript @types/node ts-node-dev
```

## Criação

01 - Criar o arquivo `.gitignore` para o node_modules, dist e .env

02 - Criar a pasta `src`, dentro dela o arquivo `server.ts`, testar com console.log( ), rodar `npm run dev `

## Configurações tsconfig.json

01 - Criar o arquivo tsconfig.json, responsável pelas opções do transpilador typescript

```bash
npx tsc --init
```

02 - Dentro do arquivo tsconfing.json, ajustar as seguintes propriedades:

- `Target`: atualizar para uma versão mais recente do ECMASCRIPT "target": "ES2022"(utilizar sempre 1 ano anterior do atual)

- Criar a pasta src e o arquivo `server.ts`
- `rootDir`: descomentar e apontar o caminho onde vão estar os arquivos typescript ./src

- `outDir`: descomentar e apontar o caminho onde os arquivos transpilados javascript vão ser destinados ./dist

- Adicionar o exclude no final fora do primeiro { }, inserir vírgula. Garante que não vai transpilar o node modules e a dist

```bash
"exclude": ["node_modules", "dist"]
```

## Configurações package.json

Dentro do arquivo package.json, ajustar as seguintes propriedades:

01 - Criar o script dev

```bash
"dev": "ts-node-dev --respawn --transpile-only ./src/server.ts"
```

02 - Criar o script build para converter arquivos typescript em javascript

```bash
"build": "tsc"
```

03 - Criar o script start

```bash
"start": "node ./dist/server.js"
```

## Configurações express

01 - Instalar o express

```bash
npm i express
```

02 - Instalar as tipagens

```bash
npm i @types/express --save-dev
```

03 - Instalar o cors

```bash
npm i cors
```

04 - Intalar as tipagens

```bash
npm i @types/cors --save-dev
```

05 - Instalar o dotenv

```bash
npm i dotenv
```

06 - Criar o servidor express no arquivo `server.ts`, excluir o console.log( ). Testar usando `npm run dev`

```bash
import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";

// Servidor express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Api Prisma 💛" });
});

// Iniciar o servidor
app.listen(process.env.PORTA, () => {
  console.log("Servidor rodando na porta:", process.env.PORTA, "💛");
});
```

07 - Criar o arquivo `.env` para definir a porta

```bash
PORTA=3000
```

08 - Testar no navegador a aplicação

```bash
http://localhost:3000/
```

## Configurações Prisma

1 - Instalar o Prisma no projeto

```bash
npm i -D prisma
```

02 - Instalar o client para acessar o banco

```bash
npm i @prisma/client
```

03 - Inicializar o schema

```bash
npx prisma init --datasource-provider postgresql
```
04 - Pegar a URL de conexão com o banco (Versel ou Neon), colar no `DATABASE_URL=` do arquivo `.env` 

```bash
postgres://default:Qz7EuC3bFVsY@ep-orange-water-a4mliouc.us-east-1.aws.neon.tech:5432/verceldb
```

## Migrate dev

```bash
npx prisma migrete dev
```
- Dar nome a tabela: `crate_table_nome`


```bash
npx prisma studio
```