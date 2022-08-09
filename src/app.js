require("dotenv").config();
const express = require('express');
const bodyparser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 2002

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

/*************** Category Routes declared here ******************/
const category = require('../routes/Category.route');

/*************** Category Routes declared here ******************/
const product = require('../routes/Product.route');

/*************** Authentication Routes declared here ******************/
const authentication = require('../routes/Authentication.route');

app.use('/c1',category);
app.use("/p1",product);
app.use("/a1",authentication);

app.listen(PORT,()=>{
    console.log(`Server is listening http://localhost:${PORT}`);
})