import express from 'express'
import { router } from '../routes'
import cors from 'cors'
import { mongoconnection } from '../connectiondb'
import 'dotenv/config'
const app = express()


app.use(cors())
app.use(express.json())
app.use('/api',router)

mongoconnection()//db

app.listen(`${process.env.PORTSERVER}`,()=>{
    console.log(`Server runing in the port http://localhost:${process.env.PORTSERVER}`)
})