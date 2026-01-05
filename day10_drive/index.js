const express = require('express');
const app = express();





// user router 
const userRouter = require('./routes/user.routes');


// using view js 
app.set('view engine','ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// using user routes 
app.use('/user',userRouter)



app.get('/',(req,res)=>{
    res.render("index");
})



app.listen(3000,()=>{
    console.log("app is running on http://localhost:3000");
})