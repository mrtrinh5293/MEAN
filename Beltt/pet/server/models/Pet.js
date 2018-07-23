var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new mongoose.Schema({
	//will need to add some validation crap...

	qtext: {type: String, required: true},

	options: {type: Array, required: true},

	user: {type: Schema.Types.ObjectId, ref: "User"}

}, {timestamps:true})


mongoose.model('Pet', PetSchema);