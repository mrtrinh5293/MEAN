var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

const path = require('path'); 
app.use(express.static(path.join(__dirname, '/public/dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(session({secret: 'goodforyou'}));

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');
router(app);

var PORT = 8000;
app.listen(8000, function(){
	console.log("Surveys\nListening on port " + PORT);
})