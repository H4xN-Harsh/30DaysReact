const express = require('express');
const path = require('path')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine" , "ejs")


app.get('/',(req,res)=>{
    res.render('index')
})

app.get("/profile/:username",function(req,res){
    const name = req.params.username;
    res.send("chal chaiya chaiya chaiya "+name)
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})