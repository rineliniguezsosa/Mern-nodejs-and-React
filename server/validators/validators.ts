import { check } from 'express-validator'

export const uservalidationregister = [
    check('nombre').notEmpty().withMessage('Requerido'),
    check('email').isEmail().withMessage("Es requerido un formato valido de Email"),
]