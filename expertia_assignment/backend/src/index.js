const express=require("express");

const app=express();
const jobController=require("./controllers/jobDetails.controllers");


const cors=require("cors");
app.use(cors());

 app.use(express.json());

 app.use("/",jobController)


 module.exports=app;