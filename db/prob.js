//mongodb://localhost:27017
require('dotenv').config();
const mongoose = require("mongoose");
//const fileupload=require('express-fileupload')
mongoose.set('strictQuery', true);
const express = require('express');

const app = express(); 
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://127.0.0.1:27017/hasham", {
    
    useNewUrlParser: true //FALTU KI WARNING SE BACHNE K LIYE
}).then(() => {
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e)
})
