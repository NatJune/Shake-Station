const shake = require('../models/shake');
const Shake = require('../models/shake');


module.exports = {
    new: newShake,
    index,
    show,
    create,
    update,
    edit,
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
   function update(req,res) {
     Shake.findByIdAndUpdate(req.params.id, function(err, shake) {
       res.render('shakes/update', {title: 'Shake update', shake});
     });
   }
   function edit(req, res) {
   Shake.findById(req.params.id, function(err, shake) {
      if (!shake.params.equals(req.params._id)) return res.redirect('/shakes');
      res.render('shakes/edit', {shake});
    });
  }
  function deleteShake(req,res) {
    Shake.findByIdAndDelete(req.params.id, function(err, shake){
    res.redirect('/shakes/delete', {shake});
    });
    
  }
  




  /*
    .create() - creates a document
    .find()  - finds documents
    .findById() - find a document by it's _id property
    .findByIdAndUpdate() - find a document by it's _id property and update
    .findByIdAndDelete() - delete a document
*/


