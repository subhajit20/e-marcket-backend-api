require("dotenv").config();
const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')
const app = express();

const PORT = process.env.PORT || 2002

/*************** Category Routes declared here ******************/
const category = require('../routes/Category.route');

/*************** Product Routes declared here ******************/
const product = require('../routes/Product.route');

/*************** Authentication Routes declared here ******************/
const authentication = require('../routes/Authentication.route');

/*************** User Routes declared here ******************/
const UserRouter = require('../routes/User.route');

/**
 * Connecting to the mongoDB atlash database
 */
 mongoose.connect(process.env.MONGO_URI,{

}).then(()=>{
    console.log("Database has been connected successfully...");
}).catch(()=>{
    console.log("Database can't be connected...")
})

/**
 * Declaring cors policy for get rid of cross platform errors
 */
app.use(cors({
    origin:"*",
    method:[
        "GET","POST","PUT","DELETE"
    ],
    credentials:true
}))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/c1',category);
app.use("/p1",product);
app.use("/a1",authentication);
app.use("/u1",UserRouter);

app.listen(PORT,()=>{
    console.log(`Server is listening http://localhost:${PORT}`);
})