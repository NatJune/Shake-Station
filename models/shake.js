const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const reviewSchema = new Schema ({
    content: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    } 
}, { timestamps: true });
    

 const shakeSchema = new Schema ({
  
    product: {
      type: String,
    },
    flavor: {
      type: String,
    }, 
    calories: {
      type:String,  
    },
    price: {
        type: Number,
        min: 10,
        max: 200,
        default: 200 
    },
    quality: {
    type: String,
    },
    comment: {
    type: String,
    },
    reviews: [reviewSchema]
    
  }, {
    timestamps: true
  });


    


module.exports = mongoose.model('Shake', shakeSchema);




