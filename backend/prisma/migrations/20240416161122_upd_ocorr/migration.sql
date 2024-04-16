/*
  Warnings:

  - Changed the type of `time_violence` on the `Occurrence` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "time_violence",
ADD COLUMN     "time_violence" TIMETZ(6) NOT NULL;
