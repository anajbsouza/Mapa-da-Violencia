/*
  Warnings:

  - You are about to drop the `Access` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Occurrence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StateList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TypesOfViolence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOccurrences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ViolenceSituations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_fk3";

-- DropForeignKey
ALTER TABLE "UserOccurrences" DROP CONSTRAINT "UserOccurrences_fk0";

-- DropTable
DROP TABLE "Access";

-- DropTable
DROP TABLE "Occurrence";

-- DropTable
DROP TABLE "StateList";

-- DropTable
DROP TABLE "TypesOfViolence";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserOccurrences";

-- DropTable
DROP TABLE "ViolenceSituations";

-- CreateTable
CREATE TABLE "occurrence" (
    "id_occurrence" BIGSERIAL NOT NULL,
    "id_user" BIGINT NOT NULL,
    "datetime_submission" TIMESTAMPTZ(6) NOT NULL,
    "age_group" TEXT,
    "date_violence" DATE,
    "time_violence" TIMETZ(6),
    "city_violence" TEXT,
    "state_violence" TEXT,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "violences_options" TEXT,
    "violence_type" TEXT,

    CONSTRAINT "occurrence_pkey" PRIMARY KEY ("id_occurrence")
);

-- CreateTable
CREATE TABLE "state_list" (
    "id_state" BIGSERIAL NOT NULL,
    "uf_state" TEXT NOT NULL,
    "name_state" TEXT NOT NULL,
    "num_occurrences" BIGINT DEFAULT 0,

    CONSTRAINT "state_list_pkey" PRIMARY KEY ("id_state")
);

-- CreateTable
CREATE TABLE "types_of_violence" (
    "id_violencetype" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "types_of_violence_pkey" PRIMARY KEY ("id_violencetype")
);

-- CreateTable
CREATE TABLE "user_fingerprint" (
    "id_user" BIGSERIAL NOT NULL,
    "fingerprint" TEXT,

    CONSTRAINT "user_fingerprint_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "user_occurrences" (
    "id_occurrence" BIGINT NOT NULL,
    "date_violence" DATE NOT NULL,
    "id_user" BIGINT NOT NULL,

    CONSTRAINT "user_occurrences_pkey" PRIMARY KEY ("id_occurrence")
);

-- CreateTable
CREATE TABLE "violence_situations" (
    "id_violenceoption" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "violence_situations_pkey" PRIMARY KEY ("id_violenceoption")
);

-- CreateIndex
CREATE UNIQUE INDEX "state_list_uf_state_key" ON "state_list"("uf_state");

-- CreateIndex
CREATE UNIQUE INDEX "user_fingerprint_fingerprint_key" ON "user_fingerprint"("fingerprint");

-- AddForeignKey
-- ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_fk0" FOREIGN KEY ("id_user") REFERENCES "user_fingerprint"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_fk1" FOREIGN KEY ("state_violence") REFERENCES "state_list"("uf_state") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_occurrences" ADD CONSTRAINT "user_occurrences_fk0" FOREIGN KEY ("id_occurrence") REFERENCES "occurrence"("id_occurrence") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_occurrences" ADD CONSTRAINT "user_occurrences_fk1" FOREIGN KEY ("id_user") REFERENCES "user_fingerprint"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
