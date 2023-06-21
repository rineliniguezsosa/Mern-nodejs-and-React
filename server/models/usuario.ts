import { Schema,model } from 'mongoose'

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
        data:String,
        default:''
    }
},{ timestamps:true })