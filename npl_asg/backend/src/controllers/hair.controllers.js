const express=require("express");

const Hair=require("../models/hair.models");

const router=express.Router();




router.get("",async (req,res)=>{
const page = req.query.page||1;
const item = req.query.items||11;
let sort = req.query.sort;
const offset = (page - 1)*item;


try {

    let hair;
    let options={};

    if(req.query.color){
        const color = req.query.color.split(",");
        options.available={$in : color};
    }
    if(req.query.category){
        const category = req.query.category.split(",");
        options.background = {$in : category};
    }
    if (sort) {
        if (sort == "sort_asc") {
          sort = { price: 1 };
        } else {
          sort = { price: -1 };
        }
      }
     hair=await Hair.find(options)
     .skip(offset)
     .sort(sort)
     .limit(item)
     .lean().exec();
     let total_page = await Hair.find(options).countDocuments();
    
       total_page = Math.ceil(total_page/item);

     return res.status(200).send({hair,total_page});
     
} catch (error) {
    return res.status(501).send({message:error.message})
}
})






router.post('/', async(req,res)=>{
    try {
        const hair = await Hair.create(req.body);
        return res.status(201).send(hair)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports= router;