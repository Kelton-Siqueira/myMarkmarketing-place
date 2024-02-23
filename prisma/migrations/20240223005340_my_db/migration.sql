/*
  Warnings:

  - You are about to drop the `productos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userLogin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropTable
DROP TABLE "productos";

-- DropTable
DROP TABLE "userLogin";

-- CreateTable
CREATE TABLE "Productos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "typeProductor" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "id_productos" TEXT NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLogin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "keyDevelop" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "UserLogin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserLogin_id_key" ON "UserLogin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserLogin_email_key" ON "UserLogin"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_id_productos_fkey" FOREIGN KEY ("id_productos") REFERENCES "UserLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
