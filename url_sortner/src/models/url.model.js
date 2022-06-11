const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode : {type:String,required:true},
    longUrl : {type:String,required:true},
    shortUrl : {type:String,required:true},
})

module.exports = mongoose.model('url',urlSchema);