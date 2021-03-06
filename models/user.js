const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const todoSchema = new Schema({
  content: {
    type: String,
    // required: true
  },
  date: {
    type: String,
    required: true,
    enum: ['TODAY', 'WEEK', 'YEAR'],
    default: 'YEAR'
  }
}, {
  timestamps: true
});

const shopSchema = new Schema({
  content: {
    type: String
  },
  store: {
    type: String,
    required: true,
    enum: ['HEB', 'WALMART', 'COSTCO'],
    default: 'HEB'
  }
}, {
  timestamps: true
});


const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  today: [todoSchema],
  week: [todoSchema],
  year: [todoSchema],
  heb: [shopSchema],
  walmart: [shopSchema],
  costco: [shopSchema],
}, {
  timestamps: true
});

module.exports = Mongoose.model('user', userSchema);