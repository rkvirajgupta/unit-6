const app=require("./index");

const connect=require("./configs/db");

app.listen(4200,async()=>{
    try {
        await connect();
        console.log("listening on port 4200")
    } catch (error) {
        console.log({message:error.message})
    }
})