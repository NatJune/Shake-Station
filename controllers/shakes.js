const shake = require('../models/shake');
const Shake = require('../models/shake');


module.exports = {
    new: newShake,
    index,
    show,
    create,
    delete: deleteShake,
  
  };
  
  function newShake(req, res) {
    res.render('shakes/new', { title: 'Add Shake' });
  }
  function index(req, res) {
    Shake.find({}, function(err, shakes) {
      console.log(shakes)
      res.render('shakes/index', { title: 'All Shakes', shakes });
    });
  }
  
  function show(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
      console.log(shake)
      res.render('shakes/show', { title: 'Shake Name', shake });
    });
  }
  
  function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    
  
    Shake.create(req.body, function(err, shake) {
      console.log(err)
      if (err) return res.redirect('/shakes/new');
      res.redirect('/shakes');
    });
  }
  
  function deleteShake(req,res) {
    shake.deleteOne(req.params.id);
    res.redirect('/shakes');
  }
  




  /*
    .create() - creates a document
    .find()  - finds documents
    .findById() - find a document by it's _id property
    .findByIdAndUpdate() - find a document by it's _id property and update
    .findByIdAndDelete() - delete a document
*/


