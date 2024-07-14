const express = require("express");
const router = express();
const path = require("path");
const upload = require("./multer");
const usermodel = require("./user");

router.set("view engine" , "ejs");
router.use(express.urlencoded({extended:true}));
router.use(express.static(path.join(__dirname , "/public")));

router.get("/" ,async function(req,res){
    const pic = await usermodel.find();
    res.render("index" , {pic});
});

router.post("/upload" , upload.single("image") , function(req,res){
    if(req.file){
        res.send("File SucessFully Upload");
    };
    req.status(404).send("File Not uploaded SuccessFully");
})

router.listen(3000);