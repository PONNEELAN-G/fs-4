import express from 'express'
import router from './routers/student_router.js'
import connectDB from './lib/db.js'
import cors from 'cors'

const app=express()
const PORT=4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectDB()

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/student',router)

app.listen(PORT,()=>{
    console.log(`port working on ${PORT}`)
})
