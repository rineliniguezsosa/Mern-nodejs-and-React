import { check } from 'express-validator'
import { validarerrores } from '../middleware'

export const uservalidationregister = [
    check('nombre').notEmpty().withMessage('Requerido'),
    check('email').isEmail().withMessage("Es requerido un formato valido de Email"),
    check('password').isLength({min:6}).withMessage("Debe contener al menos 6 caracteres"),
]