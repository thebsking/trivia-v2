const db = require('../models');

  module.exports = {
    findAll: function (req, res) {
      db.Question.find(req.query)
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json(err))
    }
  };
