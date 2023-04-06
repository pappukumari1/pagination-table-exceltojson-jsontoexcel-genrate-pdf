const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const router = require('./APIS/router/router');
require("dotenv").config();
const app=express();
mongoose.connect(process.env.DB_URL)
app.use(cors());
app.use(express.json());
app.use("/api",router);
app.listen(process.env.PORT, ()=>{
    console.log(`server start at port ${process.env.PORT}`);
})