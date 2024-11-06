-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "link_do_github" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
