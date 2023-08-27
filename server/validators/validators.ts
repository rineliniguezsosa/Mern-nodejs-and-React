import { check } from 'express-validator'
import { validarerrores } from '../middleware'
import { existemail,Noexistemail } from '../helpers'

export const uservalidationregister = [
    check('nombre').notEmpty().withMessage('*El campo Nombre es requerido'),
    check('email').notEmpty().withMessage('*El campo Email es requerido'),
    check('email').isEmail().withMessage("*Es necesario un formato valido de Email"),
    check('email').custom(existemail), //valida si el email ya existe
    check('password').notEmpty().withMessage('*El campo Password es requerido'),
    check('password').isLength({min:6}).withMessage("*El campo Password debe de contener al menos 6 caracteres"),
    validarerrores
]

export const userloginvalidator = [
    check('email').notEmpty().withMessage('*El campo Email es requerido'),
    check('email').isEmail().withMessage("*Es necesario un formato valido de Email"),
    check('email').custom(Noexistemail),
    check('password').notEmpty().withMessage('*El campo Password es requerido'),
    check('password').isLength({min:6}).withMessage("*El campo Password debe de contener al menos 6 caracteres"),
    validarerrores
]