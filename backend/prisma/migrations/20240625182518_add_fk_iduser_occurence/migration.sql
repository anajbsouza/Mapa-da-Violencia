-- AddForeignKey
ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_fk2" FOREIGN KEY ("id_user") REFERENCES "user_fingerprint"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
