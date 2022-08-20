require("dotenv").config();
const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors');
var cookieParser = require('cookie-parser');
const path = require("path");
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
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database has been connected successfully...");
}).catch(() => {
    console.log("Database can't be connected...")
})

/**
 * Declaring cors policy for get rid of cross platform errors
 */
app.use(cors({
    origin: "*",
    method: [
        "GET", "POST", "PUT", "DELETE"
    ],
    credentials: true
}))
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Contol-Allow-Origin", "*");
    res.setHeader("Access-Contol-Allow-Headers", "*");
    next()
})

app.use('/c1', category);
app.use("/p1", product);
app.use("/a1", authentication);
app.use("/u1", UserRouter);



app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Hi! Wellcome to e-marcket backend api :)"
    });
})

app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
})