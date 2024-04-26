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
    uf_state:string
};
export type AboutViolence = {
    date_violence: Date,
    agegroup: string,
    time_violence: Date,
};
