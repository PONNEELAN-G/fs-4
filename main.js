import express from 'express'
import router from './routers/student_router.js'

const app=express()
const PORT=4000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/student',router)

app.listen(PORT,()=>{
    console.log(`port working on ${PORT}`)
})
