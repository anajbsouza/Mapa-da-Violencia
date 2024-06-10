-- DropForeignKey
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_fk3";

-- AlterTable
ALTER TABLE "Occurrence" ALTER COLUMN "State_violence" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk3" FOREIGN KEY ("State_violence") REFERENCES "StateList"("uf_State") ON DELETE NO ACTION ON UPDATE NO ACTION;
