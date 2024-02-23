/*
  Warnings:

  - You are about to drop the column `idProductor` on the `productos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_idProductor_fkey";

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "idProductor";

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_id_fkey" FOREIGN KEY ("id") REFERENCES "userLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
