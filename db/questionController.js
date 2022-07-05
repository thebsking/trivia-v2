const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Question.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err))
  },
  rangeOnly: function (req, res) {
    db.Question.find({ range: true })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err))
  },
  categories: function (req, res) {
    db.Question.distinct('category')
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err))
  },
  findByCat: function (req, res) {
    db.Question.find({ category: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  }

};
