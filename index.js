const express = require('express');
const app = express();

const mongoose = require('mongoose');

//databases
const Chat = require('./models/chat.js');

//connection to mongoose server
main()
    .then((res) =>{
        console.log("mongodb connection successful");
    })
    .catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/groupChat');

};

//ejs setup
app.set("view engine","ejs");

const path = require("path");
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

//port
app.listen(8080,()=>{
    console.log("app listening on port: 8080");
});


//index route 
app.get("/",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});



