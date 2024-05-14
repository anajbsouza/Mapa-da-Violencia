/*
  Warnings:

  - The `time_violence` column on the `Occurrence` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "time_violence",
ADD COLUMN     "time_violence" TIMETZ(6);

-- AddForeignKey
ALTER TABLE "UserOccurrences" ADD CONSTRAINT "UserOccurrences_fk0" FOREIGN KEY ("id_occurrence") REFERENCES "Occurrence"("id_occurrence") ON DELETE NO ACTION ON UPDATE NO ACTION;
