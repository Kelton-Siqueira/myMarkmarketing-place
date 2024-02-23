/*
  Warnings:

  - Added the required column `sessionProductos` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_id_productos_fkey";

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "sessionProductos" TEXT NOT NULL;
