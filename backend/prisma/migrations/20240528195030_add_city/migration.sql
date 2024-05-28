/*
  Warnings:

  - You are about to drop the column `State_violence` on the `Occurrence` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_fk3";

-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "State_violence",
ADD COLUMN     "city_violence" TEXT,
ADD COLUMN     "state_violence" TEXT;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk3" FOREIGN KEY ("state_violence") REFERENCES "StateList"("uf_State") ON DELETE NO ACTION ON UPDATE NO ACTION;
