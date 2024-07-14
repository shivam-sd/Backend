const express = require('express');
const router = express();
const usermodel = require("./user");
const path = require('path');
const cookieparser = require('cookie-parser');
const expressSession = require('express-session');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const port = 3000;

const localStratagy = require("passport-local");
passport.use(new localStratagy(usermodel.authenticate()));




router.set("view engine" , "ejs");
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.use(express.static(path.join(__dirname , "public")));
router.use(cookieparser());

router.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"hsffsudgfuisdgfuisdgfuisdgfiusdgfuidsgisgfiusdgfiu8tw8vyt8"
}));

router.use(passport.initialize());
router.use(passport.session())
passport.serializeUser(usermodel.serializeUser());
passport.deserializeUser(usermodel.deserializeUser());


router.get('/' , function(req,res){
    res.render("index")
});


router.get('/login' , function(req,res){
    res.render("login")
});

router.get("/profile" , ifloggedin, function(req,res){
    res.render("profile");
});


router.post("/register" , function(req,res){
   const userdata = new usermodel({
    username:req.body.username,
    email:req.body.email,
    contact:req.body.number,
    password:req.body.password
   })
   usermodel.register(userdata , req.body.password)
.then(function(){
    passport.authenticate("local")(req,res , function(){
        res.redirect("/profile");
    })
})
})

router.use("/logout", function(req,res , next){
     req.logout(function(err){
        if(err){
            return next(err)
        }
        res.redirect('/');
     });
});



router.post("/login" , passport.authenticate("local", {
    successRedirect:"/profile",
    failureRedirect:"/login",
}), function(req,res){})


function ifloggedin(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/");
}



try{
    router.listen(port)
}catch{
    console.log(`${port} is connected`);
}