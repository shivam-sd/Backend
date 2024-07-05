//  Node Ke Andar Ek Module Hai Jiska Naam File System Hai Aur Ye Code Node Ka Hai 
    // File System Ko Require Kar Liya
const fs = require("node:fs");

// ishme Hamne write file Ka use kiya hai ye ek file create kar ke de deta hai kuchh ish tarah se ishka code hai yadi baad mai 
// dekhne per samjh na aaye to node ke DOCS pe chale jana aur Write File Ko search Kar lena code Ko dekhna use dekhna aur samjhna 

// fs.writeFile("content.hxt" , "Hello Bhai Kitna Padh Liya" , function(err) {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Tumhara File Ban Gya hai Bhai Check Karo");
//     }
// })

// ab mai rename ka use karne wala hu dekho code kuchh ish tarah hai

// fs.rename("script.js" , "File System.js" , function(err){
//     if(err) {
//         console.log("Ha Bhai Err Aa gya Hai");
//     }
//     else{
//         console.log("Bhai Name Change Ho Gya");
//     }
// })

// ab mai append function ka use karunga ish ki sahayta se ifs file mai mai text ke aage aur bhi text append karunga

// fs.appendFile("read.txt", " Aur Ye Bata ki Kal Collage aayega ya nhi jaldi se bata de mujhe" , function(err) {
//     if(err) {
//         console.log("err aa gya hai bhai");
//     }
//     else{
//         console.log("Wow Successfully chal gya bhai")
//     }
// })

// ab mai read ka use karne wala hu jisse mai file ko read kar paunga 

// fs.readFile("read.txt" , function(err) {
//     if(err) {
//         console.log("nahi kar paya bhai");
//     }
//     else{
//         console.log("err Nahi aaya Bhai")
//     }
// })

// ab unlink ko use karne wala hu isse file delet ho jata hai

// fs.unlink("read.txt" , function(err) {
//     if(err) {
//         console.log("Err");
//     }
//     else{
//         console.log("Done");
//     }
// })

// emdir (remove directry) ye sidha folder ko delete karta hai

// fs.rmdir("bhai" , function(err){
//     if(err){
//         console.log("err");
//     }
//     else{
//         console.log('Done Hai')
//     }
// })

// mkdir (make directry) ye ek folder create karke dega

// fs.mkdir("aa gya" , function(err) {
//     if(err) {
//         console.log("Nahi Bhai")
//     }
//     else{
//         console,log("Ha Bhai")
//     }
// })

// read file file ko read karata hai ishme utf8 rahata hai yadi nahi rahega to err throw karega

// fs.readFile("script.js" , 'utf8', function(err,data){
//     if(err) 
//         {
//             console.log(err)
//         }
    
//         console.log(data)

// }) 