const express=require('express')
const bpdyParser=require('body-parser')
const router=require('./routes/router')
const PORT=3000
const app=express()
app.use(bpdyParser.json())
app.use('/auth',router)

app.listen(PORT,()=>{
    console.log("server is start "+PORT)
})