const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String,
  credites: {type: Number, default: 0}
});

mongoose.model('user', userSchema);