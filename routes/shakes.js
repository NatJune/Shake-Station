const express = require('express');
const router = express.Router();
const shakesCtrl = require('../controllers/shakes');
const userCtrl = require('../controllers/users')

router.get('/', shakesCtrl.index);
router.get('/new', shakesCtrl.new);
router.get('/user', userCtrl.show);
router.get('/:id', shakesCtrl.show);
router.post('/', shakesCtrl.create);
router.put('/:id', shakesCtrl.update);
router.get('/:id', shakesCtrl.edit)
router.delete('/:id', shakesCtrl.delete);


module.exports = router;