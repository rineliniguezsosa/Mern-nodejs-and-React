import { Router } from 'express'
import { registrarse,login } from '../controllers'
import { uservalidationregister } from '../validators' 
export const router = Router()

router.get('/auth/login',login)

router.post('/auth/registrarse',uservalidationregister,registrarse)

router.post("/auth/activa-tu-cuenta")
