-- AlterTable
ALTER TABLE "Occurrence" ALTER COLUMN "id_user" DROP NOT NULL,
ALTER COLUMN "datetime_submission" DROP NOT NULL,
ALTER COLUMN "State_violence" DROP NOT NULL,
ALTER COLUMN "date_violence" DROP NOT NULL,
ALTER COLUMN "agegroup" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "violencesoptions" DROP NOT NULL,
ALTER COLUMN "time_violence" DROP NOT NULL;
