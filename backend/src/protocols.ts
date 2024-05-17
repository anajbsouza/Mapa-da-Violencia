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
    id_user: bigint,
    uf_state:string,
};
// Tipo para receber no json (json não tem tipo data)
export type AboutViolence_json = {
    id_user: bigint,
    date_violence_s: string,
    agegroup: string,
    time_violence_s: string,
};
// Tipo para escrever no banco
export type AboutViolence = {
    id_user:bigint,
    date_violence: Date,
    agegroup: string,
    time_violence: Date,
};
export type ClassifyViolencePage = {
    id_user:bigint,
    violencesoptions: string
}
export type LocalViolence = {
    id_user: bigint,
    latitude: number,
    longitude: number
};
export type Address = {
    road: string,
    suburb: string,
    city: string,
    state: string,
    postcode: number,
    country: string
};

export type InfoViolence = {
    type_violence: string,
    time_violence: Date,
    date_violence: Date
}

