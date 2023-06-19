import { Router } from 'express'
export const router = Router()

router.get('/login',(req,res)=>{
    return res.json('Hola mundo')
})
