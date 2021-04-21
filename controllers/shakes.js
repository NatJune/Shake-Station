const Shake = require('../models/shake');


module.exports = {
    new: newShake,
    index,
    show,
    create,
    
  };
  
  function newShake(req, res) {
    res.render('shakes/new', { title: 'Add Shake' });
  }
  function index(req, res) {
    Shake.find({}, function(err, shakes) {
      res.render('shakes/index', { title: 'All Shakes', shakes });
    });
  }
  
  function show(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
      console.log(shake)
      res.render('shakes/show', { title: 'Shake Detail', shakes });
    });
  }
  
  function create(req, res) {
    // remove empty/blank inputs from req.body
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    
  
    Shake.create(req.body, function(err, shake) {
      // one way to handle errors
      if (err) return res.redirect('/shakes/new');
      // for now, redirect right back to the "new" view
      res.redirect('/shakes');
    });
  }
  