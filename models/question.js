const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  category: String,
  question: String,
  answer: String,
  range: Boolean
})

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;