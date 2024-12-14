export type User = {
    id: string;
    username: string;
    email: string;
    type: number;
    firstName?: string;
    lastName?: string;
    dob?: string;
    createdAt: string;
    updatedAt: string;
}

export type ServerUser = {
    _id: string;
    username: string;
    email: string;
    password: string;
    type: number;
    firstName?: string;
    lastName?: string;
    dob?: string;
    createdAt: string;
    updatedAt: string;
}
