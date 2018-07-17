var task = require('../models/task')

module.exports = {
  tasks: function(req, res) {
    tasks = task.find({}, function(err, tasks) {
      if (err) {
        res.json({'err': 'Ooooopsies'});
      }
      else {
        res.json({'tasks': tasks});
      }
    })
  }
}
