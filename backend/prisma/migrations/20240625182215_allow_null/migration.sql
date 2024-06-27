/*
  Warnings:

  - Made the column `age_group` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date_violence` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time_violence` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city_violence` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state_violence` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `violences_options` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `violence_type` on table `occurrence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fingerprint` on table `user_fingerprint` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "occurrence" ALTER COLUMN "age_group" SET NOT NULL,
ALTER COLUMN "date_violence" SET NOT NULL,
ALTER COLUMN "time_violence" SET NOT NULL,
ALTER COLUMN "city_violence" SET NOT NULL,
ALTER COLUMN "state_violence" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "violences_options" SET NOT NULL,
ALTER COLUMN "violence_type" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_fingerprint" ALTER COLUMN "fingerprint" SET NOT NULL;
