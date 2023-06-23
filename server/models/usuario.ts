import { Schema,model,Document } from 'mongoose'
import { Usuario } from '../Types'

const user = new Schema({
    nombre:{
        type:String,
    }, 
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    hashedpassword:{
        type:String,
    },
    salt:String,
    role:{
        type:String,
        default:'subscriptor'
    },
    resetpasswordlink:{
        type:String,
        default:''
    }
},{ timestamps:true })

export const usuario =  model('usuario',user)