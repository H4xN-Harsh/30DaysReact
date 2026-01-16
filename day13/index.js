const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    fs.readdir(`./files`,(error,files)=>{
        // console.log(files);
        res.render('index',{files:files})
    })
    // res.render('index')
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})