// inside of routes/index.js

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/shakes');
});


module.exports = router;