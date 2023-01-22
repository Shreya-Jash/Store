const { application } = require("express");
const express = require("express");
const app= express();
const port=8000;

app.get("/",(req,res)=>{
    res.status(201).json("Server Created");
})

app.listen(port,()=>{
    console.log(`Server is running at port no: ${port}`);
})