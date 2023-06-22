import { usuario } from "../models";

export const  existemail = async(email = "")=>{
    const existemail = await usuario.findOne({email})
}