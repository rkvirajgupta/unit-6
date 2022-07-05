const mongoose=require("mongoose");

const jobDetailsSchema  = new mongoose.Schema({
    company:{type:String},
    role:{type:String},
    salary:{type:Number},
    location:{type:String},
    description:{type:String}
},
{
versionKey:false,
timeStamps:true,
})
const jobdetail = mongoose.model("jobdetail",jobDetailsSchema);
module.exports=jobdetail;