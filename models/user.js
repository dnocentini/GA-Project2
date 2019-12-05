const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const todoSchema = new Schema({
  content: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const shopSchema = new Schema({
  content: {
    type: String
  }
}, {
  timestamps: true
});


const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  todos: [todoSchema],
  shops: [shopSchema],
}, {
  timestamps: true
});

module.exports = Mongoose.model('user', userSchema);