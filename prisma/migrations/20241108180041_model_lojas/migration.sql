-- CreateTable
CREATE TABLE "lojas" (
    "cnpj" VARCHAR(14) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "segmento" TEXT DEFAULT 'alimentação',
    "endereco" VARCHAR(200) NOT NULL,
    "telefone" INTEGER,
    "quantidade_filiais" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("cnpj")
);
