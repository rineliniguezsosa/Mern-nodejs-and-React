import { Document } from 'mongoose'

export interface Usuario extends Document {
    nombre:string;
    email:string;
    password:string;
    hashedpassword:string;
    salt:string;
    role:'subscriptor';
    resetpasswordlink:string;
}