const express = require('express');
const app = express();
const path = require('path')
const usermodel = require('./models/user');
const postmodel = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const user = require('./models/user');
const user = require('./models/user');
const { name } = require('ejs');
const { send } = require('process');
const post = require('./models/post');
const upload = require("./models/multer");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.get("/", function (req, res) {
    res.render('index')
});

app.get("/upload" , function(req,res){
    res.render("upload");
});

app.post("/upload" , isLoggedin, upload.single('file') , async function(req,res){
    const user = await usermodel.findOne({email:req.user.email});
    user.profilepicture = req.file.filename;
    await user.save();
    res.redirect('/profile');
});


app.post("/register", async function (req, res) {
    const user = await usermodel.findOne({ email: req.body.email });
    if (user) {
        return res.status(500).send("User Allready Register");
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
            const createuser = await usermodel.create({
                username: req.body.username,
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                password: hash
            })
            res.send(createuser);
        })
    })
    const token = jwt.sign({ email: req.body.email }, "hjdfjdhfj");
    res.cookie("token", token);
    res.redirect("profile")

});

app.get("/login", function (req, res) {
    res.render("login");
});


app.get("/profile" , isLoggedin, async function(req,res){
    const user = await usermodel.findOne({email:req.user.email}).populate('post');
    console.log(user)
    res.render("profile", {user:user});
});

app.get("/edit/:id" , isLoggedin, async function(req,res){
    const post = await postmodel.findOne({_id:req.params.id}).populate('user');
    res.render("edit" , {post});
});

app.post("/update/:id" , isLoggedin, async function(req,res){
    const post = await postmodel.findOneAndUpdate({_id:req.params.id} , {contant:req.body.contant});
    res.redirect("/profile");
});


app.get("/like/:id" , isLoggedin, async function(req,res){
    const post = await postmodel.findOne({_id:req.params.id}).populate('user');
    if(post.likes.indexOf(req.user.userid) === -1){
        post.likes.push(req.user.userid);
    }
    else{
        post.likes.splice(post.likes.indexOf(req.user.userid)  , 1)
    }
    await post.save();
    res.redirect("/profile");
});


app.post("/post" , isLoggedin, async function(req,res){
    const user = await usermodel.findOne({email:req.user.email});
    const createpost = await postmodel.create({
        user:user._id,
        contant:req.body.contant
    });
    user.post.push(createpost._id);
    await user.save();
    res.redirect('/profile');
});

app.post("/login", async function (req, res) {
    const user = await usermodel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(500).redirect("/login");
    }
    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
            const token = jwt.sign({ email: req.body.email }, "hjdfjdhfj");
            res.cookie("token", token);
            res.status(200).redirect("/profile");
        }
        else {
            res.redirect("/login");
        }
    })
})

app.get("/logout" , function(req,res){
    // console.log(req.cookies.token)
    res.cookie("token" , "");
    res.redirect("/")
})

function isLoggedin(req, res, next) {
    if (req.cookies.token === "") {
        res.redirect("/login");
    }
    else{
        let data = jwt.verify(req.cookies.token , "hjdfjdhfj" );
        req.user = data;
        next();
    }
}

app.listen(3000);