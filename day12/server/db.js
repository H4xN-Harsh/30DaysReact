const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://cwh:1234@cluster0.fbg9btx.mongodb.net/testdb?appName=Cluster0");
        console.log("mongodb is connected ")
    }catch(error){
        console.error(error);
        process.exit(1)
    }
}
module.exports=connectDB;