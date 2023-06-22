import { check } from 'express-validator'

export const uservalidationregister = [
    check('nombre').notEmpty().withMessage('Requerido'),
]