const express = require('express');
const app = express();
const dotenv = require('dotenv');

// home routes
const indexRouter = require('./routes/index.routes')

dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
// cookies parser
const cookieParser = require('cookie-parser');

// user router 
const userRouter = require('./routes/user.routes');


// using view js 
app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// using home / index router
app.use('/',indexRouter)
// using user routes 
app.use('/user',userRouter)



app.get('/',(req,res)=>{
    res.render("index");
})



app.listen(3000,()=>{
    console.log("app is running on http://localhost:3000");
})