const express = require('express');
const router = express.Router();
const shakesCtrl = require('../controllers/shakes');

router.get('/', shakesCtrl.index);
router.get('/new', shakesCtrl.new);
router.get('/:id', shakesCtrl.show);
router.post('/', shakesCtrl.create);

module.exports = router;