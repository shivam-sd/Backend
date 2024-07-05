const cookies = require('cookie-parser')
const express = require('express');
const app = express();
// const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


app.get("/" , function(req,res){
    res.cookie('name' , 'shivam');
    res.send("done")
});

// app.get("/read" , function(req,res){
//     // console.log(req.cookies)
//     res.send("read done")
// });

app.get("/net" , function(req,res){
    let token = jwt.sign({email:"shivam23@gmail.com" }, "secret");
    res.cookie("token" , token);
    res.send("done");
})

app.get("/read" , function(req,res){
    let data = jwt.verify(req.cookies.token , "secret");
    console.log(data)
})

// use bcrypt 
// app.get("/net" , function(req,res){
//     bcrypt.genSalt(10 , function(err,salt){
//         bcrypt.hash("shivam" , salt , function(err,hash){
//             console.log(hash)
//         })
//     })
// })


app.listen(3000);