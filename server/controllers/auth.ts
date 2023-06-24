import {request,response} from 'express'
import nodemailer from 'nodemailer'
import jwt,{ VerifyErrors,JwtPayload } from 'jsonwebtoken'
import { usuario } from '../models'
import bcrypt from 'bcrypt'

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
export const login = async(req = request,resp = response)=>{
    const {email,password} = req.body

    try {
        const user = await usuario.findOne({email})
        
        if(!user){
            return resp.status(400).json({
                msg:'Ups, parece que el correo electrónico no coincide'
            })
        }

        const contraseña:string = password
        const dbpassword:any = user.password

        const passwordmatch:boolean = bcrypt.compareSync(contraseña,dbpassword)

        if(!passwordmatch){
            return resp.status(400).json({
                msg:'El password no coincide'
        })}else{
            const token = jwt.sign({_id:user._id},`${process.env.JWTACTIVATEACCOUNT}`,{expiresIn:'7d'})
        }
    } catch (error) {
        
    }
}

export const activatucuenta = async(req = request,resp = response)=>{
    const {token} = req.body

    if(token){
        jwt.verify(token,`${process.env.JWTACTIVATEACCOUNT}`,(error:VerifyErrors | null)=>{
            if(error){
                return resp.status(400).json({
                    msg:'El link expiro autenticate de nuevo'
                })
            }
        })
    }

    const { nombre,email,password } = jwt.decode(token) as JwtPayload //decode payload

    const nuevousuario = new usuario({nombre,email,password}) //instancia usuario

    const salt = bcrypt.genSaltSync(parseInt(`${process.env.SECRET}`))
    nuevousuario.password = bcrypt.hashSync(password,salt);

    try {
        await nuevousuario.save()

        return resp.status(200).json({
            msg:`¡Bienvenido ${nombre}! Inicia sesión para continuar`
        })
    } catch (error) {
        return resp.status(400).json({
            msg:'Algo sucedio :( intente de nuevo'
        })
    }
}