const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/multer");

const userschema = mongoose.Schema({
    picture:String
});

module.exports = mongoose.model("user" , userschema)