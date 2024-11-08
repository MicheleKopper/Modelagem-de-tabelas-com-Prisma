import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import { repository } from "./database/repository.prisma";

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
app.get("/usuarios", async (request: Request, response: Response) => {
  const usuarios = await repository.usuario.findMany();

  response
    .status(200)
    .json({
      ok: true,
      message: "Usuários buscados com sucesso!",
      dado: usuarios,
    });
});

// Iniciar o servidor
app.listen(process.env.PORTA, () => {
  console.log("Servidor rodando na porta:", process.env.PORTA, "💛");
});
