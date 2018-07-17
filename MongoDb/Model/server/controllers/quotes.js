let Message = require('../models/quote');
let Comment = require('../models/quote');

// Message = mongoose.model('Message', MessageSchema)
// var Comment = mongoose.model('Comment', CommentSchema)


module.exports = {
        index: function (req, res){
            Message.find({}, function(err, messages){
            res.render('index.ejs', { messages: messages});
            });
        },
        
        create: function(req, res){
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
            });
            return res.redirect('quotes.ejs');
        },

        comment: function(req, res){
            Comment.create(req.body, function(err, comment){
            Message.findByIdAndUpdate(
                req.body.message, 
                { $push: { comments: comment._id } }, 
                { new: true } ,function(err, message){
                        if(err){
                            console.log(err);
                        } else {
                            console.log(message);
                            return res.redirect('quotes.ejs');
                        }
                    })  ; 
                })
        },


        quotes: function (req, res){
            Message.find({}, function(err, messages){
		        res.render('quotes.ejs', { messages: messages});
		})
       }
    }       