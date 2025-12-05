const express=require('express');
const axios=require('axios');
const app=express();
const port=3001;

//Middleware to parse JSON bodies
app.use(express.json());
//get fake users from external API
app.get('/users',async(req,res)=>{
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data);
    }catch(error){
        res.status(500).send('Error fetching users');
    }
});

//get specific user by ID
app.get('/users/:id',async(req,res)=>{
    const userId=req.params.id;
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        res.json(response.data);
    }catch(error){
        res.status(500).send('Error fetching user');
    }
});

app.listen(port,()=>{
    console.log("Server is Running with External API Integration...");
});
