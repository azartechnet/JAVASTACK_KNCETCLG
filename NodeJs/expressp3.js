const exp=require('express')
const app=exp()
app.use(exp.text())
app.post("/",function(req,res){
    var data=req.body;
    console.log(data)
}).listen(3001)
console.log("Server is Running...")