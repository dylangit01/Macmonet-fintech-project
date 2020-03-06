import {Role} from "./role";

export class User {
    id?: string;
    username: string;
    brokerageNum?: string;
    email: string;
    password: string;
    repassword: string;
    role: Role[];
    token?: string

}

export interface MacError {
    data: any;
    code: number;
    msg: string
}
