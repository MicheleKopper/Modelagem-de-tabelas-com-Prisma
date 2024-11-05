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

- 01 - Criar o script dev

```bash
"dev": "ts-node-dev --respawn --transpile-only ./src/server.ts"
```

- Criar o scripts "build": "tsc" para converter arquivos typescript em javascript

## Excludes

01 - Criar o arquivo .gitignore para o node_modules e dist
