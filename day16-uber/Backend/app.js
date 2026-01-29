const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./db/db");
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

const express = require('express');
const cors = require('cors');
const cookieParser=require('cookie-parser');
connectDB();
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("hello sir");
});
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;