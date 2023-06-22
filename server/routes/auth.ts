import { Router } from 'express'
import { registrarse,login } from '../controllers'
import { uservalidationregister } from '../validators' 
export const router = Router()

router.get('/auth/login',login)

router.get('/auth/registrarse',uservalidationregister,registrarse)
