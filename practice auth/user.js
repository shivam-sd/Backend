const { escapeXML } = require('ejs');
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/authentication");

const userSchema = mongoose.Schema({
    username:{
       type:String,
    },
    contact:{
        type:Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});

userSchema.plugin(plm);

module.exports = mongoose.model("user" , userSchema)