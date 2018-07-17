const mongoose = require('mongoose')


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
        app.post('/comments', function(req, res){
            Comment.create(req.body, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    Message.findByIdAndUpdate(req.body.message, { $push: { comments: comment._id } }, { new: true } ,function(err, message){
                        if(err){
                            console.log(err);
                        } else {
                            console.log(message);
                            return res.redirect('quotes.ejs');
                        }
                    })
                }
            })
        })

        app.get('/quotes.ejs', function (req, res){
    Message.find({}).populate('comments').exec(function(err, messages){
		if(err){
			console.log(err);
		} else {
			return res.render('quotes.ejs', { messages: messages});
		}
	})
})
       }        