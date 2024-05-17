/*
  Warnings:

  - The primary key for the `UserIP` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id_user` to the `Occurrence` table without a default value. This is not possible if the table is not empty.
  - Made the column `datetime_submission` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `State_violence` to the `Occurrence` table without a default value. This is not possible if the table is not empty.
  - Made the column `date_violence` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `agegroup` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `violencesoptions` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time_violence` on table `Occurrence` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `id_user` on the `UserOccurrences` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_fk1";

-- DropForeignKey
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_fk3";

-- DropForeignKey
ALTER TABLE "UserOccurrences" DROP CONSTRAINT "UserOccurrences_fk1";

-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "id_user",
ADD COLUMN     "id_user" BIGINT NOT NULL,
ALTER COLUMN "datetime_submission" SET NOT NULL,
DROP COLUMN "State_violence",
ADD COLUMN     "State_violence" BIGINT NOT NULL,
ALTER COLUMN "date_violence" SET NOT NULL,
ALTER COLUMN "agegroup" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "violencesoptions" SET NOT NULL,
ALTER COLUMN "time_violence" SET NOT NULL,
ALTER COLUMN "time_violence" SET DATA TYPE VARCHAR(255);

-- AlterTable
DROP TABLE IF EXISTS "UserIP" CASCADE;

CREATE TABLE "UserIP" (
    "id" BIGSERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserIP_pkey" PRIMARY KEY ("id")
);


-- AlterTable
ALTER TABLE "UserOccurrences" DROP COLUMN "id_user",
ADD COLUMN     "id_user" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "time_violence",
ADD COLUMN     "time_violence" TIMETZ(6);

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk1" FOREIGN KEY ("id_user") REFERENCES "UserIP"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk3" FOREIGN KEY ("State_violence") REFERENCES "StateList"("id_State") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserOccurrences" ADD CONSTRAINT "UserOccurrences_fk1" FOREIGN KEY ("id_user") REFERENCES "UserIP"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
