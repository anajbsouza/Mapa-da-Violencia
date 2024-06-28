/*
  Warnings:

  - A unique constraint covering the columns `[name_state]` on the table `state_list` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "occurrence" DROP CONSTRAINT "occurrence_fk1";

-- CreateIndex
CREATE UNIQUE INDEX "state_list_name_state_key" ON "state_list"("name_state");

-- AddForeignKey
ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_fk1" FOREIGN KEY ("state_violence") REFERENCES "state_list"("name_state") ON DELETE CASCADE ON UPDATE CASCADE;
