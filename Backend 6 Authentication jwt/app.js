const express = require('express');
const app = express();
const cokkiePasrser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const cookieParser = require('cookie-parser');
const usermodel = require("./models/user");

app.set("view engine" , "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")));
app.use(cookieParser());


app.get("/", function(req,res){
    res.render("index");
});

app.post("/create" ,  function(req,res){

bcrypt.genSalt(10 , function(err , salt){
    bcrypt.hash(req.body.password , salt , async function(err , hash){
        console.log(hash)
        const createduser = await usermodel.create({
            username:req.body.username,
            email:req.body.email,
            age:req.body.age,
            password:hash
        });
        const token = jwt.sign(req.body.email , "gduifgdsjkjk")
        res.cookie("token" ,  token);
        res.send(createduser);
    })
})
})

app.get("/login" , function(req,res){
    res.render("login")
})

app.post("/login" , async function(req,res){
    const user = await usermodel.findOne({email:req.body.email})
    // console.log(user.password)
    bcrypt.compare(req.body.password , user.password , function(err,result){
        if(result) {
            let token = jwt.sign({email:user.email} , "dhsfhdshfj");
            res.cookie("token" , token);
            res.send("Yes You Can Login");
        }
           
        else{
            res.send("You Cant't Login")
        }
    })
})

app.get("/logout" , function(req,res){
    res.cookie("token" , "");
    res.redirect("/")
})




app.listen(3000);