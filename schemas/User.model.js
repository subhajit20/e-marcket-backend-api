const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        default: uuidv4(),
    },
    firstname: {
        type: String,
        trim: true,
        required: true,
    },
    middlename: {
        type: String,
    },
    lastname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        required: true,
    },
    u_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    buyProducts: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],
    date: {
        type: Date,
        default: Date.now(),
    }
})

const User = new mongoose.model("User", UserSchema);

module.exports = User;