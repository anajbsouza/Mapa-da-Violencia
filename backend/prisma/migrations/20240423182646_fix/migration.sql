-- DropForeignKey
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_fk3";

-- DropForeignKey
ALTER TABLE "UserOccurrences" DROP CONSTRAINT "UserOccurrences_fk0";

-- AlterTable
ALTER TABLE "Occurrence" ALTER COLUMN "State_violence" SET DATA TYPE TEXT,
ALTER COLUMN "time_violence" SET DATA TYPE VARCHAR(255);

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk3" FOREIGN KEY ("State_violence") REFERENCES "StateList"("uf_State") ON DELETE NO ACTION ON UPDATE NO ACTION;
