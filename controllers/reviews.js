
const Shake = require('../models/shake');

module.exports = {
    create,
};

function create(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.push(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}