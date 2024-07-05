const mongoose = require("mongoose");
const { type } = require("os");
const post = require("./post");

mongoose.connect("mongodb://127.0.0.1:27017/DataAssociation");

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
});

module.exports = mongoose.model("user" , userSchema);
