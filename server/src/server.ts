import express from 'express'
import { router } from '../routes'
import cors from 'cors'
import { mongoconnection } from '../connectiondb'
import 'dotenv/config'
const app = express()


if(`${process.env.NODE_ENV}`=== 'development'){
    app.use(cors({origin:`${process.env.ORIGINCLIENT}`}))
}

app.use(express.json())
app.use('/api',router)

mongoconnection()//db

app.listen(`${process.env.PORTSERVER}`,()=>{
    console.log(`Server runing in the port http://localhost:${process.env.PORTSERVER}`)
})