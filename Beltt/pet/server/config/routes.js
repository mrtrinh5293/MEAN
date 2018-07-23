var mongoose = require('mongoose');
var session = require('express-session');
var User = mongoose.model('User');
var users = require('../controllers/users.js');
var pets = require('../controllers/pets.js');
const path = require('path');

module.exports = function (app) {

	// USER ROUTES
	app.get('/whosLoggedIn', (req, res) => {
		res.json({user: req.session.user});
	})

	app.get('/getLoggedUser', (req, res) =>{
		users.getLoggedUser(req, res);
	})

	app.post('/login', (req, res) => {
		users.login(req, res);
	})

	app.get('/getUser/:id', (req, res) =>{
		users.getUser(req, res);
	})

	app.post('/users/search', (req, res) =>{
		users.search(req, res);
	})

	app.get('/logout', (req, res) =>{
		if(req.session.user != undefined){
			console.log(req.session.user.name, "logged out.");
		}
		req.session.user = undefined;
		res.json("Logged out");
	})

	// pet ROUTES

	app.post('/createPet', (req, res) =>{
		console.log("createPet route");
		pets.create(req, res);
	})

	app.get('/showAllPets', (req, res)=>{
		pets.showAll(req, res);
	})

	app.delete('/deletePet/:id', (req, res)=>{
		pets.deletePet(req, res);
	})

	app.get('/showOnePet/:id', (req, res)=>{
		pets.showOnePet(req, res);
	})

	app.post('/pets/search', (req, res) =>{
		pets.search(req, res);
	})

	app.post('/updatePet', (req, res)=>{
		pets.updatePet(req, res);
	})


	// EVERYTHING ELSE
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
	})
}