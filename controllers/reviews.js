
const shake = require('../models/shake');
const Shake = require('../models/shake');

module.exports = {
    create,
    // update,
    rating,
    deleteReview,
    // editReview
};

function create(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.push(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}
// function update(req, res) {
//     Shake.findById(req.params.id, function(err, shake) {
//         shake.reviews.push(req.body);
//         shake.save(function() {
//             res.redirect(`/shakes/${shake._id}`);
//         });
//     });
// }

function rating(req, res) {
    Shake.findById(req.params.id, function(err, shake) {
        shake.reviews.push(req.body);
        shake.save(function() {
            res.redirect(`/shakes/${shake._id}`);
        });
    });
}

function deleteReview(req, res) {
    // const shake = Shake.findById(req.params.id)
console.log(req.params.id, 'istheid')
    Shake.findOne({'reviews._id':req.params.id}, function(err, shake){
        const item = shake.reviews.find(review => review.id === `${req.params.id}`)
        item.remove()
        shake.save(function (){
        res.redirect(`/shakes/${shake._id}`);   
        })
        
    });
}

// function editReview(req, res) {
//     // const shake = Shake.findById(req.params.id)
// console.log(req.params.id, 'istheid')
//     Shake.findById({'reviews._id':req.params.id}, function(err, shake){
//         const item = shake.reviews.find(review => review.id === `${req.params.id}`)
//         // item.remove()
//         shake.save(function (){
//         res.redirect(`/shakes/${shake._id}`);   
//         })
        
//     });
// }

