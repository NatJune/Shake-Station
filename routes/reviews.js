const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/reviews/:id/reviews', reviewsCtrl.create);

// router.put('/:id/edit', reviewsCtrl.editReview);
router.delete('/shakes/:id/reviews', reviewsCtrl.deleteReview);
router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.put('/reviews/:id/', reviewsCtrl.update);

module.exports = router;