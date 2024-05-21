-- CreateTable
CREATE TABLE "Occurrence" (
    "id_occurrence" BIGSERIAL NOT NULL,
    "id_user" TEXT,
    "datetime_submission" TIMESTAMPTZ(6),
    "State_violence" TEXT,
    "date_violence" DATE,
    "agegroup" TEXT,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "violencesoptions" TEXT,
    "violencetype" TEXT,
    "time_violence" VARCHAR(255),

    CONSTRAINT "Occurrence_pkey" PRIMARY KEY ("id_occurrence")
);

-- CreateTable
CREATE TABLE "TypesOfViolence" (
    "id_violencetype" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "TypesOfViolence_pkey" PRIMARY KEY ("id_violencetype")
);

-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "UserOccurrences" (
    "id_occurrence" BIGINT NOT NULL,
    "id_user" TEXT NOT NULL,
    "date_violence" DATE NOT NULL,

    CONSTRAINT "UserOccurrences_pkey" PRIMARY KEY ("id_occurrence")
);

-- CreateTable
CREATE TABLE "ViolenceSituations" (
    "id_violenceoption" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "ViolenceSituations_pkey" PRIMARY KEY ("id_violenceoption")
);

-- CreateTable
CREATE TABLE "StateList" (
    "id_State" BIGSERIAL NOT NULL,
    "uf_State" TEXT NOT NULL,
    "name_State" TEXT NOT NULL,
    "num_Occurrences" BIGINT DEFAULT 0,

    CONSTRAINT "StateList_pkey" PRIMARY KEY ("id_State")
);

-- CreateIndex
CREATE UNIQUE INDEX "StateList_uf_State_key" ON "StateList"("uf_State");

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk1" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_fk3" FOREIGN KEY ("State_violence") REFERENCES "StateList"("uf_State") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserOccurrences" ADD CONSTRAINT "UserOccurrences_fk1" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
