const express = require('express');
const router = express.Router();

const {body,validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
// user model /user schema
const userModel = require('../models/user.model');
router.get('/register',(req,res)=>{
    res.render("register")
});
router.post('/register',
    // this is the kind of third party middleware and this comefrom express validator ;
    body('email').trim().isEmail().isLength({min:13}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){//error detactions 
            return res.status(400).json({
                errors:errors.array(),
                message:'invalid Data '
            })
        };
    //     console.log(errors);
    // console.log(req.body);
    // res.send('Apka kimti data ab hamara hota hai 😂')
    // res.send(errors);

    const {email,username,password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    const newUser =await userModel.create({
        email,
        username,
        password:hashPassword
    })
    res.json(newUser)
})
router.get('/login' ,(req,res)=>{
    res.render('login')
})
router.post('/login',
    body('username').trim().isLength({min:3}),
    body('password').trim().isLength({min:4}),
    async (req,res)=>{


        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                error:errors.array(),
                message:'invalid'
            })
        }
        const {username,password}=req.body();
        const user  = await userModel.findOne({
            username : username,
        })
        if(!user){
            return res.status(400).json({
                message:'username or password is incorrect '
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message:'username or password is incorrect '
            })
        }
    }
)

module.exports=router;