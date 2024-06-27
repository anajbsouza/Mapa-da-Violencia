-- DropForeignKey
ALTER TABLE "occurrence" DROP CONSTRAINT "occurrence_fk1";

-- DropForeignKey
ALTER TABLE "occurrence" DROP CONSTRAINT "occurrence_fk2";

-- DropForeignKey
ALTER TABLE "user_occurrences" DROP CONSTRAINT "user_occurrences_fk0";

-- DropForeignKey
ALTER TABLE "user_occurrences" DROP CONSTRAINT "user_occurrences_fk1";

-- AddForeignKey
ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_fk1" FOREIGN KEY ("state_violence") REFERENCES "state_list"("uf_state") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_fk2" FOREIGN KEY ("id_user") REFERENCES "user_fingerprint"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_occurrences" ADD CONSTRAINT "user_occurrences_fk0" FOREIGN KEY ("id_occurrence") REFERENCES "occurrence"("id_occurrence") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_occurrences" ADD CONSTRAINT "user_occurrences_fk1" FOREIGN KEY ("id_user") REFERENCES "user_fingerprint"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
