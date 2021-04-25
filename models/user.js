const mongoose = require('mongoose');
const factSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  googleId: String,
  shakes: [{
    type:mongoose.Schema.ObjectId,
    ref:'IceCream'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);