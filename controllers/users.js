const Shake = require('../models/shake');
const User = require('../models/user');

module.exports = {
    show
};

function show(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
      console.log(shake)
      res.render('shakes/show', { title: 'Shake Name', shake });
    });
  }