var mongoose = require('mongoose');
var session = require('express-session');
var User = mongoose.model('User');

module.exports = {

	login: (req, res) => {
		//1. query db by name
		User.findOne({name: req.body.name}).populate('appointments').exec((err, user) =>{
			if(err){
				console.log("Error at login:", err);
			}
			if(user == null){
				user = new User({name: req.body.name});
				user.save((err)=>{
					if(err){console.log("Error creating user:", err);}
					else{req.session.user = user;}
					res.json({user: user});
				})
			}
			else{
				req.session.user = user;
				res.json({user: user});
				console.log(req.session.user.name, "logged in.");
			}
		})
	},

	getUser: (req, res) =>{
		console.log("req.params", req.params);
		User.findById(req.params.id).populate('bikes').exec((err, user) =>{
			if(err){
				console.log(err);
			}
			else{
				console.log("what is getUser returning:", user);
				res.json({user: user});
			}
		})
	},

	getLoggedUser: (req, res) =>{
		User.findById(req.session.user._id).populate('bikes').exec((err, user) =>{
			if(err){
				console.log(err);
			}
			else{
				console.log("what is getLoggedUser returning:", user);
				res.json({user: user});
			}
		})
	},

	
    search: (req, res) =>{
        console.log("Searching for:", req.body.query, "in users");
		var regx = new RegExp(req.body.query, 'i');
        User.find({name: { $regex: regx }}, (err, results) =>{
            if(err){
                console.log("Err on searching appointments:\n", err)
            }
            else{
                res.json({results: results});
            }
        } )
    }
}