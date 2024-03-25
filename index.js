const express = require('express');
const app = express();

const mongoose = require('mongoose');

const methodOverride = require("method-override");

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
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//port
app.listen(8080,()=>{
    console.log("app listening on port: 8080");
});


//index route 
app.get("/",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});


//new-create route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let {from , to, msg} =req.body;

    //creating new chat
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    
    //saving new chat
    newChat.save().then((res)=>{
        console.log("saved");
    }).catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");
})

//delete route
app.delete("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let dele = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});



