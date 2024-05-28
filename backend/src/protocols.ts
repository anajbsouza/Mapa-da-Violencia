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
export type ViolenceState = {
    id_occur: bigint,
    uf_state:string,
};
// Tipo para receber no json (json não tem tipo data)
export type AboutViolence_json = {
    id_occur: bigint,
    date_violence_s: string,
    agegroup: string,
    time_violence_s: string,
};
// Tipo para escrever no banco
export type AboutViolence = {
    id_occur:bigint,
    date_violence: Date,
    agegroup: string,
    time_violence: Date,
};
export type ClassifyViolencePage = {
    id_occur:bigint,
    violencesoptions: string
}
export type LocalViolence = {
    id_occur: bigint,
    latitude: number,
    longitude: number
};

export type InfoViolence = {
    type_violence: string,
    time_violence: Date,
    date_violence: Date
}

