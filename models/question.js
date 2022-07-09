const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  category: {type: String},
  question: {type: String},
  answer: {type: String},
  range: {type: Boolean},
})

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;