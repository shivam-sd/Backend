const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const { Console } = require('console');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")))


app.get("/", function (req, res) {
    fs.readdir('./file', function (err, file) {
        res.render("index", { file: file });
    });
});

// app.post("/create", function (req, res) {
//     fs.writeFile(`./file/${req.body.name.split(' ').join('')}.txt`, req.body.details, function (err) {
//         res.redirect("/")
//     });
// })

app.get("/file/:filename", function(req,res){
    fs.readFile(`./file/${req.params.filename} `, function(data){
        console.log(data)
        res.render("readfile" , {filename:req.params.filename , filedata:data});
    })
});

app.get("/edit/:filename" , function(req,res){
    res.render("edit" , {filename:req.params.filename});
})
app.post("/edit" , function(req,res){
    console.log(req.body)
   fs.rename(`./file/${req.body.previews} `, `./file/${req.body.new}` , function(err){
    res.redirect('/')
   })
})








app.listen(3000);