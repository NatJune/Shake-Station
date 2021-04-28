const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/reviews/:id/reviews', reviewsCtrl.create);
router.put('/:id/update', reviewsCtrl.update);
router.delete('/shakes/:id/reviews', reviewsCtrl.deleteReview);

module.exports = router;