/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `userLogin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userLogin_email_key" ON "userLogin"("email");
