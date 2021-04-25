const express = require('express');
const router = express.Router();
const shakesCtrl = require('../controllers/shakes');

router.get('/', shakesCtrl.index);
router.get('/new', shakesCtrl.new);
router.get('/:id', shakesCtrl.show);
router.post('/', shakesCtrl.create);
router.delete('/:id', shakesCtrl.delete);
// router.post('/:id', shakeCtrl.delete);
module.exports = router;