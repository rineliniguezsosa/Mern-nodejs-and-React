import { check } from 'express-validator'
import { validarerrores } from '../middleware'
import { existemail } from '../helpers'

export const uservalidationregister = [
    check('nombre').notEmpty().withMessage('*El campo Nombre es requerido'),
    check('email').isEmail().withMessage("Es requerido un formato valido de Email"),
    check('email').custom(existemail), //valida si el email ya existe
    check('password').isLength({min:6}).withMessage("Debe contener al menos 6 caracteres"),
    validarerrores
]

export const userloginvalidator = [
    check('email').isEmail().withMessage("Es requerido un formato valido de Email"),
    check('password').isLength({min:6}).withMessage("Debe contener al menos 6 caracteres"),
    validarerrores
]