import { ReactNode } from 'react';

export type AuthLayoutprops = {
    children:ReactNode,
    titulo:string
}

export type RegisterForm = {
    nombre:string,
    email:string,
    password:string
}