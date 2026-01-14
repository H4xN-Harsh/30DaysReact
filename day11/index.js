const express = require('express');
const app = express();


// some built in middleweare 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");




// router for home : 
app.get("/",(req,res)=>{
    res.send("heyyyyy budddyyyy ")
})

app.get('/age',(req,res)=>{
    res.render("age");
})
app.post('/age', async(req,res,next)=>{
    const {age} = req.body;
    if(age>=20){
        console.log(age);
        res.send(`your age is :${age}`)
    }
})



app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})