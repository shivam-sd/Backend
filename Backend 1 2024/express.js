const express = require('express');

const app = express();

app.set("view engine" , "ejs");

app.use(express.static('./public'));

// set up cookies parser
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.use(function(req,res,next){
    console.log("Hello Bhai Mai Middileware Hu");
    next();
});


app.get("/" , function(req,res) {
    res.render("index",{name:"shivam"});
});


app.get("/profile/:username" , function(req,res) {
    res.send(`Wellcome To My Profile ${req.params.username}`);
});


app.listen(3000)