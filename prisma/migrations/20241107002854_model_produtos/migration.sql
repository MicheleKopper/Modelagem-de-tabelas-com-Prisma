-- CreateTable
CREATE TABLE "produtos" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "quantidade_estoque" INTEGER NOT NULL,
    "tipo_produto" VARCHAR(50) NOT NULL,
    "disponivel" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
