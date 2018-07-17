var path = require('path'),
  message = require('../controllers/quotes');
  comment = require('../controllers/quotes');


module.exports = function(app){
        app.get('/', message.index);
        app.post('/messages', message.create);
        app.post('/comments', comment.comment);
        app.get('/quotes.ejs', message.quotes);
       }        