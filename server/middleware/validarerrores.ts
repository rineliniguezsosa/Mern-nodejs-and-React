import { validationResult } from 'express-validator'

export const validarerrores = async(req,resp,next)=>{
    const error = validationResult(req)
}