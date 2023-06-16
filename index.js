const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require('./routes/UploadRoute.js')


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log("MongoDB Connected....");
})

app.use(UploadRoute);

app.listen(PORT,()=>{
    console.log(`Server Started At Port ${PORT}`);
});
