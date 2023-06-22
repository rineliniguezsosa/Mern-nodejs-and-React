import { validationResult } from 'express-validator'

export const validarerrores = async(req,resp,next)=>{
    const error = validationResult(req)

    if(!error.isEmpty()){
        return resp.status(400).json(error)
    }
}