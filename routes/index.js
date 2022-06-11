const router = require('express').Router();
const {question} = require('../models')

//Search API


//Add API
router.post('/add', async (req, res) => {
  const newQuestion = await question.create({
    type: req.body.type,
    category: req.body.category,
    question: req.body.question,
    answer: req.body.answer,
  });
})