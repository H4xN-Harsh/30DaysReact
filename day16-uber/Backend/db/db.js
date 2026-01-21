const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("database is connected ! ")
    }catch(error){
        console.error("Not connected to db " , error);
        process.exit(1);
    }
}

module.exports = connectDB;