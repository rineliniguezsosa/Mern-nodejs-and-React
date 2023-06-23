import { Document } from 'mongoose'

export interface Usuario {
    nombre:string;
    email:string;
    password:string;
    hashedpassword:string;
    salt:string;
    role:'subscriptor';
    resetpasswordlink:string;
}