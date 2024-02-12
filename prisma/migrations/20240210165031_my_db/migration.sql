/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `userLogin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "userLogin_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "userLogin_id_key" ON "userLogin"("id");
