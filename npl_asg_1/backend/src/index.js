const express = require('express');
const app = express();
const connect = require('./config/db')
const UserController = require('./controllers/user.controller')
const ProductController = require('./controllers/product.controller')
const CategoryController = require('./controllers/category.controller')
const BrandController = require('./controllers/brand.controller')
const ReviewController = require('./controllers/reviews.controller')
app.use(express.json());

app.use('/users', UserController)
app.use('/product', ProductController)
app.use('/category', CategoryController)
app.use('/brand', BrandController)
app.use('/review', ReviewController)


module.exports = app;