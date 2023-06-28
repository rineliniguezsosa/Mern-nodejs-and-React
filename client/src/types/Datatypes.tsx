import { ReactNode } from 'react';

export type AuthLayoutprops = {
    children:ReactNode,
    titulo:string
}

export type RegisterFormTypes = {
    nombre:string,
    email:string,
    password:string
}