import path from'path';
import fs from"fs";
import data from'./read.js';

var directories = path.join("__dirname"+"./db.json");
function pushdata(value){
    var x = new Promise((resolve,reject)=>{
        data.push(value)
            fs.writeFile('db.json',JSON.stringify(data),function(err){
              if(err) throw err;
              else{
                 resolve(true);
                }
            })
    })
    .then((d)=>{
        return d;
    })
    .catch((err)=>{
        return err;
    })
      return x
}




export default pushdata
