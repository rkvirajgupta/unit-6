import path from'path'
import fs from"fs";

var directories = path.join("__dirname"+"./db.json");
var x = new Promise((resolve,reject)=>{
    fs.readFile('db.json','utf-8',(err, data)=>{
        if (err) {
            reject(err); 
        }
        else{
            const users = JSON.parse(data);
             resolve(users);
        }
    });
})
.then((data)=>{
    return data;
})
.catch((err)=>{
    return err;
})
export default await x