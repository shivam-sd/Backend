const express = require("express");
const path = require("path");

const app = express();

// in dono line ke wajah se ham from ko handel kae payega aur jo form ka data hoga use yah un readebal bana deta hai
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ejs aur public file ko setup kiya
app.use(express.static(path.join(__dirname , '/public')))
app.set("view engine" , "ejs")


app.get("/", function(req,res) {
    res.render("index");
});

app.get("/profile/:username", function(req,res) {
    res.send(`Wellcome , ${req.params.username}`);
});

app.get("/profile/:username/:age" , function(req,res) {
    res.send(`Wellcome to Your Profile ${req.params.username} and your age is ${req.params.age}`);
});

app.listen(3000 , function() {
    console.log("Chal Rha hai")
});