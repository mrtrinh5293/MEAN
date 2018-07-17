var mongoose = require('mongoose');



let MessageSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name cannot be blank'],
      minlength: [4, 'Name must be at least 4 charac']  
    },
    message:{
        type: String,
        required: [true, 'Message cannot be blank']
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {timestamps:true});

//comment
let CommentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name cannot be blank'],
      minlength: [4, 'Name must be at least 4 charac']  
    },
    comment:{
        type: String,
        required: [true, 'Comment cannot be blank']
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }
}, {timestamps:true});

module.exports = mongoose.model('Message', MessageSchema);
module.exports = mongoose.model('Comment', CommentSchema);
