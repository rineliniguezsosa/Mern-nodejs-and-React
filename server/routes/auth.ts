import { Router } from 'express'
import { registrarse,login } from '../controllers'
export const router = Router()

router.get('/auth/login',login)

router.get('/auth/registrarse',registrarse)
