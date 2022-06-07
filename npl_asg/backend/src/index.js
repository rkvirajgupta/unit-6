const express=require("express");

const app=express();
const hairController=require("./controllers/hair.controllers");


const cors=require("cors");
app.use(cors());

 app.use(express.json());

 app.use("/hair",hairController)


 module.exports=app;