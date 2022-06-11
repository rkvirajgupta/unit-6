const express = require('express')
const app = express();
const connect = require('./configs/db');
const Url = require('./controllers/url.controller');
const Redirect = require('./controllers/redirect.controller')
app.use(express.json())


app.use('/', Redirect)
app.use('/api/url', Url)


module.exports=app;