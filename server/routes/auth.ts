import { Router } from 'express'
import { registrarse,login } from '../controllers'
export const router = Router()

router.get('/auth/login',(req,res)=>{
    return res.json('Hola mundo')
})

router.get('/auth/registrarse',registrarse)
