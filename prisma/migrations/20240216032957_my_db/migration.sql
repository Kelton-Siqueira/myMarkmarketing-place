/*
  Warnings:

  - Added the required column `idProductor` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_id_fkey";

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "idProductor" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_idProductor_fkey" FOREIGN KEY ("idProductor") REFERENCES "userLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
