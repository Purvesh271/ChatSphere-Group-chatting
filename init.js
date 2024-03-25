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

//adding sample data
let allchats = [ 
    {
        from: "storm",
        to: "Everyone",
        msg: "goood morning ",
        created_at: new Date(),
    },
    {
        from: "lonewolf",
        to: "storm",
        msg: "goood morning storm",
        created_at: new Date(),
    },
    {
        from: "tenzenuzui",

        msg: "goood morning guys",
        created_at: new Date(),
    },
    {
        from: "tufvemon",

        msg: "gud mrngg",
        created_at: new Date(),
    },
    {
        from: "storm",
        to: "lonewolf",
        msg: "Sir which project are u currently working on?",
        created_at: new Date(),
    },
]

 
Chat.insertMany(allchats).then((res) =>{
    console.log("saved");
}).catch((err) =>{
    console.log(err);
});