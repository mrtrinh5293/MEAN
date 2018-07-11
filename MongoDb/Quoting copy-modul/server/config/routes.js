const mongoose = require('mongoose')
    quotes	 = require('../../server.js')

    module.exports = function(app){
        app.get('/', function (req, res){
            Message.find({}).populate('comments').exec(function(err, messages){
                if(err){
                    console.log(err);
                } else {
                    return res.render('index.ejs', { messages: messages});
                }
            })
        })
    }

    module.exports = function(app){
        app.get('/', function (req, res) {
            app.post('/messages', function(req, res){
                Message.create(req.body, function(err, message){
                    if(err){
                        let errors_arr = [];
                        for(key in err.errors){
                            let error = err.errors[key];
                            errors_arr.push(error.message);
                        // console.log(error.message);
                         }
                    } else {
                        console.log(message);
                    }
                })
                return res.redirect('quotes.ejs');
            })
                
           })
        }
