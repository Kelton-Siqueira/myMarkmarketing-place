/*
  Warnings:

  - You are about to drop the column `idUsers` on the `Productos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_idUsers_fkey";

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "idUsers";

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_id_fkey" FOREIGN KEY ("id") REFERENCES "userLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
