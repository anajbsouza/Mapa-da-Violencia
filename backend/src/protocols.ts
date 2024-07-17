export type ApplicationError = {
    name: string;
    message: string;
};

export type RequestError = {
    status: number;
    data: object | null;
    statusText: string;
    name: string;
    message: string;
};
export type OccurrenceData = {
    fingerprint: string,
    age_group: string,
    datetime_violence: string,
    city_violence: string,
    state_violence: string,
    latitude: number,
    longitude: number,
    violence_options: string,
    violence_type: string
}
export type OccurrenceData_bd = {
    id_user: bigint,
    age_group: string,
    datetime_violence: Date,
    city_violence: string,
    state_violence: string,
    latitude: number,
    longitude: number,
    violence_options: string,
    violence_type: string
}
export type ViolenceState = {
    state:string,
    city: string
};
// Tipo para receber no json (json não tem tipo data)
export type AboutViolence = {
    datetime_violence: string,
    agegroup: string
};

export type ClassifyViolencePage = {
    violencesoptions: string
}
export type LocalViolence = {
    id_occur: bigint,
    latitude: number,
    longitude: number
};


