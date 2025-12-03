const exp=require('express')
const app=exp()
const port=3001
app.get("/",(req,res)=>{
    res.send(`<div><h2>Welcome</h2></div>`)
}).listen(port)
console.log("Server is Running...")