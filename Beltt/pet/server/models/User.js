var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO:
// 1) Add pre function to password to encrypt w/ bcrypt
// 2) Add validation to ensure against duplicate email addresses ("unique: true" is not enough!)

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter a first name."],
		validate: {
			validator: function(value){
				return /^[A-z ]+$/.test(value)
			},
			message: "Please enter a valid name."
		}
	},

	pets:[{type: Schema.Types.ObjectId, ref: 'Pet'}]
})
mongoose.model('User', UserSchema);