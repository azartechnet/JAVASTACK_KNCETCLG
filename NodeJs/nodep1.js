var h1 = require('http');

h1.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // <-- Content-Type is 'text/plain'
    res.write('<h1>Welcome</h1>'); // <-- But you're sending HTML content
    res.end(); // <-- Missing in your original code
}).listen(3031);

console.log("Server is Running...");