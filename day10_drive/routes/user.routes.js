const express = require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator')

router.get('/register',(req,res)=>{
    res.render("register")
});
router.post('/register',
    // this is the kind of third party middleware and this comefrom express validator ;
    body('email').trim().isEmail().isLength({min:13}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),
    (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){//error detactions 
            return res.status(400).json({
                errors:errors.array(),
                message:'invalid Data '
            })
        };
        console.log(errors);
    console.log(req.body);
    res.send('Apka kimti data ab hamara hota hai 😂')
    res.send(errors);
})

module.exports=router;