import {request,response} from 'express'
import nodemailer from 'nodemailer'
import jwt,{ VerifyErrors} from 'jsonwebtoken'

//Metodo envia un email al usuario
export const registrarse = async(req = request,res = response) => {
    const {nombre,email,password} = req.body //datos del usuario
    console.log(nombre,email,password)

    const token = jwt.sign({nombre,email,password},`${process.env.JWTACTIVATEACCOUNT}`,{expiresIn:'5m'})

    const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: `${process.env.USER}`,
        pass: `${process.env.PASS}`,
        }
    });

    const msg = ({
        from: `<norepy@mernauth.com>`, // sender address
        to: `${email}`, // list of receivers
        subject:`Activate your count ${nombre}`, 
        html: `
        <strong>please follow this link for sign in now</strong>
        <a href="${process.env.CLIENT}/auth/${token}">follow this link</a>
        <p>This message can use sentitive information </p>
        <p>${process.env.CLIENT}</p>
        `, 
    })

    try{
        await transporter.sendMail(msg)

        res.json({
            mensaje:`El ${email} ha sido enviado`
        })
    }catch(error){
        res.json({
            mensaje:`Algo salio mal al enviar el email`
        })
    }
}

//Metodo para verificar que un usuario exista en la DB
export const login = async()=>{

}

export const activatucuenta = async(req = request,resp = response)=>{
    const {token} = req.body

    if(token){
        
    }
}