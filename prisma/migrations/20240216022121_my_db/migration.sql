/*
  Warnings:

  - The primary key for the `Productos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Productos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Productos_id_key" ON "Productos"("id");

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_id_fkey" FOREIGN KEY ("id") REFERENCES "userLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
