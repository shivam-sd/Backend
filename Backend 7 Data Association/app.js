const express = require("express");
const app = express();
const usermodel = require("./models/user");
const postmodel = require("./models/post");


app.get("/" , function(req,res){
     res.send('Wellcome');
});

app.get("/create", async function(req,res){
    const createuser = await usermodel.create({
        username:"mr.shivam006",
        email:"shivammaurya@gmail.com",
       age:"20",

    });
    res.send(createuser)
})

app.get("/post/create" , async function(req,res){
    const createpost = await postmodel.create({
        postdata:"hii hello",
        user:"6676af1408c7a3323faa028e",
    })
    const user = await usermodel.findOne({_id:"6676af1408c7a3323faa028e"}).populate('post');
    user.post.push(createpost._id);
    await user.save();
    res.send(createpost)
})

app.listen(3000);