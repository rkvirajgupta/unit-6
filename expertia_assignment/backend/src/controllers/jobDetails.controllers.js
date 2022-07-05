const express=require("express");

const jobdetail=require("../models/jobDetails.model");

const router=express.Router();

router.get('/job/search/:id', async(req,res)=>{
    try {
        const job = await jobdetail.find({role:req.params.id}).lean().exec();
        return res.status(200).send(job);
    } catch (error) {
        return res.status(500).send(error);
    }
  })


router.get('/job/:id', async(req,res)=>{
  try {
      const job = await jobdetail.findById({_id:req.params.id}).lean().exec();
      return res.status(200).send(job);
  } catch (error) {
      return res.status(500).send(error);
  }
})
router.get('/job', async(req,res)=>{
    try {
        const job = await jobdetail.find({}).lean().exec();
        return res.status(200).send(job);
    } catch (error) {
        return res.status(500).send(error);
    }
  })


router.post('/job', async(req,res)=>{
    try {
        const job = await jobdetail.create(req.body);
        return res.status(201).send(job)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports= router;