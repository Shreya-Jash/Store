require("dotenv").config()
const { application } = require("express");
const express = require("express");
const cookiParser=require("cookie-parser")
require("./db/conn")
const router = require("./routes/router")
const cors = require("cors")
const app= express();
const port=8000;

app.get("/",(req,res)=>{
    res.status(201).json("Server Created");
})

app.use(express.json());
app.use(cookiParser())
app.use(cors())
app.use(router)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}/`);
})