const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./db/db");
const userRoutes = require('./routes/user.routes');
const express = require('express');
const cors = require('cors');
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send("hello sir");
});
app.use('/users',userRoutes)

module.exports = app;