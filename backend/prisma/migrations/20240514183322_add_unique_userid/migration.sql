/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `Occurrence` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Occurrence_id_user_key" ON "Occurrence"("id_user");
