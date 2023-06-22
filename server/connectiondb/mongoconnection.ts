import mongoose from 'mongoose'

export const mongoconnection = async() =>{
    try {
        await mongoose.connect(`${process.env.MONGOCONNECTIONSTRING}`)

        console.log("Conexión exitosa a la base de datos.")
    } catch (error) {
        console.error('Error de conexión a la base de datos:',error);
    }
}