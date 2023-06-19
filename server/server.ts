import express from 'express'
import { router } from './routes'
import 'dotenv/config'
const app = express()

app.use(express.json())
app.use('/api',router)

app.listen(`${process.env.PORTSERVER}`,()=>{
    console.log(`Server runing in the port http://localhost:${process.env.PORTSERVER}`)
})