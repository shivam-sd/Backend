const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MiniApp");

const userschema = mongoose.Schema({
    username:String,
    email:String,
    name:String,
    age:Number,
    password:String,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
    profilepicture :{
        type:String,
        default:"default.png"
    }

});

module.exports = mongoose.model("user" , userschema);