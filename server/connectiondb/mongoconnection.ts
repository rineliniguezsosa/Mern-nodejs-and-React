import mongoose from 'mongoose'

export const mongoconnection = async() =>{
    try {
        await mongoose.connect(`${process.env.MONGOCONNECTIONSTRING}`)
    } catch (error) {
        
    }
}