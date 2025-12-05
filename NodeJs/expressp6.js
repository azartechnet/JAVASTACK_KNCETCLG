const express=require('express')
const app=express()
const port=3001

//Multiple Routing
const userRouter=express.Router()
userRouter.get("/user",(req,res)=>{
    res.send(`<div><h2>User Page</h2></div>`)
} )
const adminRouter=express.Router()
adminRouter.get("/admin",(req,res)=>{
    res.send(`<div><h2>Admin Page</h2></div>`)
} )
app.use("/",userRouter)
app.use("/",adminRouter)
app.listen(port,()=>{
    console.log("Server is Running with Multiple Routing...")
})