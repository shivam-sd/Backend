const mongoose = require("mongoose");
const user = require("./user");



const postschema = mongoose.Schema({
     user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
     },
     date:{
        type:Date,
        default:Date.now
     },
     contant:String,
     likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
     }
    
});

module.exports = mongoose.model("post" , postschema);