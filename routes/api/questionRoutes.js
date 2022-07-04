const router = require('express').Router();
const controller = require('../../db/questionController');

router
.route('/')
.get(controller.findAll);

module.exports = router;