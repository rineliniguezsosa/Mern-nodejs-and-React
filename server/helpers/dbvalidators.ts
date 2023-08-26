import { usuario } from "../models";

export const  existemail = async(email = "")=>{
    const existemail = await usuario.findOne({email})

    if(existemail){
        throw new Error(`El ${email} ya esta registrado`)
    }
}

export const Noexistemail = async(email ="")=>{
    const existemail = await usuario.findOne({email})
}