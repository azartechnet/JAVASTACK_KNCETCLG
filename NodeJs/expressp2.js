const exp=require('express')
const app=exp()
app.use(exp.json())
app.post("/",function(req,res){
    const {name,age}=req.body;
    console.log(name,age)
}).listen(3001)
console.log("Server is Running...")