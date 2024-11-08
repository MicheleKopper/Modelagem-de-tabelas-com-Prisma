import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import { repository } from "./database/repository.prisma";
import { request } from "http";

// Servidor express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Api Prisma 💛" });
});

// Rota Prisma client USUARIOS
app.get("/usuarios", async (request: Request, response: Response) => {
  const usuarios = await repository.usuario.findMany();

  response.status(200).json({
    ok: true,
    message: "Usuários buscados com sucesso!",
    dado: usuarios,
  });
});

// Rota Prisma client PRODUTOS
app.get("/produtos", async (request: Request, response: Response) => {
  const produtos = await repository.produto.findMany();

  response.status(200).json({
    ok: true,
    message: "Produtos buscados com sucesso!",
    dado: produtos,
  });
});

// Rota Prisma client LOJA
app.get("/lojas", async (request: Request, response: Response) => {
  const lojas = await repository.loja.findMany();

  response.status(200).json({
    ok: true,
    message: "Lojas buscadas com sucesso!",
    dado: lojas,
  });
});

// Rota Prisma client FORNECEDORES
app.get("/fornecedores", async (request: Request, response: Response) => {
  const fornecedores = await repository.fornecedor.findMany();

  response.status(200).json({
    ok: true,
    message: "Fornecedores buscados com sucesso!",
    dado: fornecedores,
  });
});

// Iniciar o servidor
app.listen(process.env.PORTA, () => {
  console.log("Servidor rodando na porta:", process.env.PORTA, "💛");
});
