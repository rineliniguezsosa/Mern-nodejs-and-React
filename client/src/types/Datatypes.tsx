import { ReactNode } from 'react';

export type AuthLayoutprops = {
    children:ReactNode,
    titulo:string
}

export type RegisterFormTypes = {
    nombre?:string | undefined,
    email:string,
    password:string
}

export type RegisterFormErrors = {
    location:string,
    msg:string,
    path:string,
    type:string,
    value:string
}

export type Usuario = {
    nombre:string | undefined
    token:string,
    show:boolean
};
   