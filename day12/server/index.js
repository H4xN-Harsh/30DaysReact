// mongodb+srv://Harsh:<db_password>@cluster0.pt0uhmw.mongodb.net/?appName=Cluster0

const express = require("express");
const connectDB = require('./db');
const itemModel = require("./models/item");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())


connectDB()

// creating api for reading backend 
app.get('/', async(req,res)=>{
    const response = await itemModel.find();
    return res.json({items:response});
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})