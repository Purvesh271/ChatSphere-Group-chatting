const mongoose = require('mongoose');

//chat schema
const chatSchema = new mongoose.Schema({
    from: {
        type:String,
        required: true,
    },
    to: {
        type: String,
        default: "Everyone",
    },
    msg: {
        type: String,
    },
    created_at: {
        type: Date,
        required: true,
    },
});

//model/collection
const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;