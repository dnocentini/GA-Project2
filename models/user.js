const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const taskSchema = new Schema({
    text: String
}, {
    timestamps: true
});

const itemSchema = new Schema({
    text: String
}, {
    timestamps: true
});


const userSchema = new Schema({
    UserName: String,
    UserId: Number,
    tasks: [taskSchema],
    items: [itemSchema],
    googleId: String,
}, {
    timestamps: true
});
  
  module.exports = Mongoose.model('user', userSchema);