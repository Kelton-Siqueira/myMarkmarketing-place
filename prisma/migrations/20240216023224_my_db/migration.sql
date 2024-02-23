/*
  Warnings:

  - Added the required column `idUsers` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_id_fkey";

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "idUsers" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_idUsers_fkey" FOREIGN KEY ("idUsers") REFERENCES "userLogin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
