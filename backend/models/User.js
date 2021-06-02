const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    // required: [true, 'Please Give an Email'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  username: String,

  firstName: {
    type: String,
    // required: [true, 'Please give your first name'],
  },

  lastName: {
    type: String,
    // required: [true, 'Please give your last name'],
  },
  age: { type: Number, min: 16, max: 70 },
  friendList: [String],

  friends: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  country: { type: String, enum: ['Germany', 'Russia'] },
  language_code: {
    type: String,
    enum: ['en', 'de', 'uk', 'pk'],
  },
  gender: { type: Boolean, default: true },
  profile_pic: {
    type: String,
    default: '/images/1543222_apple.jpeg',
  },
  addressSchema: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
