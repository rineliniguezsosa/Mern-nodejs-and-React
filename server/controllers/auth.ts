import {request,response} from 'express'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'

//Metodo envia un email al usuario
export const registrarse = async(req = request,res = response) => {
    const {nombre,email,password} = req.body //datos del usuario
}

//Metodo para verificar que un usuario exista en la DB
export const login = async()=>{

}