const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/shakes/:id/reviews', reviewsCtrl.create);
router.put('/:id/update', reviewsCtrl.update);
router.post('/:id/rating', reviewsCtrl.rating);
router.delete('/:id', reviewsCtrl.deleteRating);
router.delete('/:id', reviewsCtrl.deleteReview);

module.exports = router;