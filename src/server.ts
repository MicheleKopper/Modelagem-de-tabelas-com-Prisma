import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import { repository } from "./repository.prisma";

// Servidor express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Api Prisma 💛" });
});

// Rota Prisma client
// app.get("/", async (request: Request, response: Response) => {
//   const nome_tabela = await repository.nome_tabela.findMany();

//   response.status(200).json({ ok: true, message: "💛", dado: nome_tabela });
// });

// Iniciar o servidor
app.listen(process.env.PORTA, () => {
  console.log("Servidor rodando na porta:", process.env.PORTA, "💛");
});
