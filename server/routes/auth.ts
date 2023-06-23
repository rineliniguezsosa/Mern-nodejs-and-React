import { Router } from 'express'
import { registrarse,login,activatucuenta } from '../controllers'
import { uservalidationregister,userloginvalidator } from '../validators' 
export const router = Router()

router.post('/auth/login',userloginvalidator,login)

router.post('/auth/registrarse',uservalidationregister,registrarse)

router.post("/auth/activa-tu-cuenta",activatucuenta)
