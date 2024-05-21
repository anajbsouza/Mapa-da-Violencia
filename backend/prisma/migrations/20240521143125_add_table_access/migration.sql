/*
  Warnings:

  - You are about to drop the `UserIP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserIP" CASCADE;

-- CreateTable
CREATE TABLE "Access" (
    "id" BIGSERIAL NOT NULL,
    "fingerprint" VARCHAR(255) NOT NULL,
    "latitude" DECIMAL(9,6) NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "createdat" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Access_pkey" PRIMARY KEY ("id")
);

-- -- AddForeignKey
-- ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk1" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- -- AddForeignKey
-- ALTER TABLE "UserOccurrences" ADD CONSTRAINT "UserOccurrences_fk1" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
