
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

const server = app.listen(8000);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'f8382-83838dk-83832lla-13423br',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    
    res.render("index");
})

io.on('connection', function (socket) { //2

    socket.on('but1_green', function(){
        
        io.emit('color_click', "green")
    });

    socket.on('but2_blue', function () {
        
        io.emit('color_click', "blue")
    });

    socket.on('but3_red', function () {
        
        io.emit('color_click', "red")
    });

});