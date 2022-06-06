const express=require("express");

const Hair=require("../models/hair.models");

const router=express.Router();

router.post('/', async(req,res)=>{
    try {
        const hair = await Hair.create(req.body);
        return res.status(201).send(hair)
    } catch (error) {
        return res.status(500).send(error)
    }
})


router.get("",async (req,res)=>{
try {
    const hair=await Hair.find().lean().exec();
    return res.status(200).send(hair);
} catch (error) {
    return res.status(501).send({message:error.message})
}
})

module.exports= router;