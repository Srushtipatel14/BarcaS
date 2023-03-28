require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const products=require("./models/productSchema");
const DefaultData=require("./defaultdata");
const router=require("./routes/router");
const cookieParser=require("cookie-parser");
const port= process.env.PORT||8000;
require("./db/conn");
const cors=require("cors");
app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"))
}

app.listen(port,()=>{
    console.log(`your program is running on port ${port}`);
});

DefaultData();
