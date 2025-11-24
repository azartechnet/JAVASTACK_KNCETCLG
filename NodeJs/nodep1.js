const h1=require('http')
const s1=h1.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('welcome to the Application')
}).listen(8081)
console.log("Server is Running...")