var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
}, {timestamps: true });

var task = mongoose.model('task', taskSchema);
module.exports = User;
