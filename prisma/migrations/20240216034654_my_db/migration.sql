/*
  Warnings:

  - You are about to drop the `Productos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_idProductor_fkey";

-- DropTable
DROP TABLE "Productos";

-- CreateTable
CREATE TABLE "productos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "typeProductor" TEXT NOT NULL,
    "idProductor" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "productos_id_key" ON "productos"("id");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idProductor_fkey" FOREIGN KEY ("idProductor") REFERENCES "userLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
