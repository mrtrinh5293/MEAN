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



app.listen(8000, function(){
    console.log('listening on port 8000...');
})

require('./server/config/routes.js')(app)