
const Shake = require('../models/shake');

module.exports = {
    create,
    update,
    rating,
    deleteRating,
    deleteReview
};

function create(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.push(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}
function update(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.push(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}
function rating(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.push(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}
function deleteRating(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.pull(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}

function deleteReview(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.pull(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}