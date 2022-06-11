const router = require('express').Router();
const { question } = require('../models')

//Search API


//Add API
router.post('/add', async (req, res) => {
  try {
    const newQuestion = await question.create({
    type: req.body.type,
    category: req.body.category,
    question: req.body.question,
    answer: req.body.answer,
  });
  res.status(200).json(newQuestion);
} catch (err) {
  res.status(400).json(err);
}
});