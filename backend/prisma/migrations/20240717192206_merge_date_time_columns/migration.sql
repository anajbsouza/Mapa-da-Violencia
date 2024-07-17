/*
  Warnings:

  - You are about to drop the column `date_violence` on the `occurrence` table. All the data in the column will be lost.
  - You are about to drop the column `time_violence` on the `occurrence` table. All the data in the column will be lost.
  - You are about to drop the column `date_violence` on the `user_occurrences` table. All the data in the column will be lost.
  - Added the required column `datetime_violence` to the `occurrence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datetime_violence` to the `user_occurrences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "occurrence" DROP COLUMN "date_violence",
DROP COLUMN "time_violence",
ADD COLUMN     "datetime_violence" TIMESTAMPTZ(6) NOT NULL;

-- AlterTable
ALTER TABLE "user_occurrences" DROP COLUMN "date_violence",
ADD COLUMN     "datetime_violence" TIMESTAMPTZ(6) NOT NULL;
