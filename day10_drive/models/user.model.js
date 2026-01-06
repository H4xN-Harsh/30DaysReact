const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength:[3,"Username must be at Least 3 Character long"]
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:[13,'email must be at least 13 Characters long ']
    },
    password:{
        required:true,
        type:String,
        trim:true,
        minLength:[4,"password should be 4 character ."]
    }
})

const user = mongoose.model('user',userSchema);
module.exports = user;