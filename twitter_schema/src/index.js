const express = require('express');
const { connect } = require('./configs/db');
const app = express();
app.use(express.json());


app.listen(5000,async()=>{
    try {
        await connect()
        console.log('Listening on Port 5000 !')
    } catch (error) {
        console.log(error);
    }
})