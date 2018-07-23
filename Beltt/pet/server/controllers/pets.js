var mongoose = require('mongoose');
var session = require('express-session');
var moment = require('moment');
var Pet = mongoose.model('Pet');
var User = mongoose.model('User');

module.exports = {
    create: (req, res) =>{
        console.log("Do we make it into the controller?");
        req.session.errors = [];
        var pet = new Pet({
            qtext: req.body.qtext,
            options: req.body.options,
            user: req.session.user._id
        });
        User.findById(req.session.user._id, function(err, thisUser){
            if(err){console.log("Error attempting to retrieve user in pets.create:", err);}
            else{
                thisUser.pets.push(pet);
                thisUser.save((err) => {console.log("Error attempting to save user after pet creation:",err)});
                pet.save((err) =>{
                    if(err){console.log("Error attempting to save pet after creation:", err)}
                    else{console.log("pet saved.")}
                })
            }
        });
    },

    showAll: function(req, res){
        Pet.find({}).populate('user').exec((err, pets)=>{
            if(err){
                console.log(err);
                res.json({errors: err})
            }
            else{
                res.json({errors: "None", pets: pets});
            }
        })
    },

    showOnePet: (req, res) => {
        Pet.find({_id: req.params.id}).populate('user').exec((err, pet)=>{
            if(err){
                console.log("Error retreiving one pet:", err);
            }
            else{
                res.json({pet: pet});
            }
        })
    },

    deletePet: (req, res) => {
        var pet = Pet.findByIdAndRemove({_id: req.params.id}, err=>{
            if(err){console.log("Error on pet delete:", err)}
            else{
                thisUser = User.findById(req.session._id).populate('pets').exec(
                    err=>{console.log(err)}, thisUser=>{
                        thisUser.save();
                        console.log("User updated.")});
                console.log("Pet deleted.")};
        })
    },

    getUsersPets: (req, res) => {
        Pet.find({user: req.session.user._id}, (err, pets) =>{
            if(err){console.log("Error attempting to get pets by user:", err)}
            else{
                console.log("Found these pets:", pets);
                res.json({pets: pets});
            }
        })
    },

    search: (req, res) =>{
        console.log("Searching for:", req.body);
        var regx = new RegExp(req.body.query, 'i');
        Pet.find({qtext: {$regex: regx}}).populate('user').exec((err, results) =>{
            if(err){
                console.log("Err on searching pets:\n", err)
            }
            else{
                res.json({results: results});
            }
        })
    },

    updatePet: (req, res) => {
        Pet.findByIdAndUpdate(req.body._id, {$set: {options: req.body.options}}, (err, thisPet)=>{
            if(err){
            console.log("Error in controller attempting to update pet:", err);
            }
            else{
                console.log("pet saved.");
                thisPet.save();
            }
        })
    }
}