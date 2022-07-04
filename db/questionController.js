const db = require('../models');

  module.exports = {
    findAll: function (req, res) {
      db.Question.find()
        .then((model) => res.json(model))
        .catch((err) => res.status(400).json(err))
    },
    categoryList: function (req, res) {
      db.Question.distinct("category")
        .then((model) => res.json(model))
        .catch((err) => res.status(400).json(err))
    },
    // create: function(req, res){
    //     db.Book.create(req.body)
    //     .then((model)=> res.json(model))
    //     .catch((err) => res.status(400).json(err))
    // },
    // delete: function(req, res){
    //     db.Book.findById(req.params.id)
    //     .then((model)=> model.remove())
    //     .then((model)=> {res.json(model)})
    //     .catch((err) => res.status(400).json(err))
    // },
  };
