let express = require('express');
let bp = require('body-parser');
let mongoose = require('mongoose');

let app = express();

//setup middleware
app.use(bp.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//overwrite mongoose promise library with the JS promise library
mongoose.Promise = global.Promise;

//connect to the database
mongoose.connect('mongodb://localhost/Quoting23048', { useMongoClient: true });

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

Message = mongoose.model('Message', MessageSchema);
Comment = mongoose.model('Comment', CommentSchema);


app.listen(8000, function(){
    console.log('listening on port 8000...');
})

require('./server/config/routes.js')(app)