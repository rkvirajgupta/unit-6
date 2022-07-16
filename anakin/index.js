const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');

app.use(cors())
const bodyParser = require('body-parser');

const scrapers = require('./Scraper');



const db = require('./db')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/restaurants', async (req, res) => {
    try {
      const restaurantsdata = await scrapers.get();
      console.log(restaurantsdata)
    res.send(restaurantsdata)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
})


app.listen(port, async () =>{
    try {
        await db();
      } catch (err) {
        console.log(err);
      }
    
      console.log("listening on port 3000");
})