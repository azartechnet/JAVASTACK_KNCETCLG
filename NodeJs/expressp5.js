const express=require('express')
const app=express()
const port=3001

//Single Rounting

const router=express.Router()
router.get("/",(req,res)=>{
    res.send(`<div><h2>Welcome to Express with Routing</h2></div>`)
})

app.use("/",router) 
app.listen(port,()=>{
    console.log("Server is Running with Routing...")
})