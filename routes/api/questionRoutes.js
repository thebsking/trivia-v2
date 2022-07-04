const router = require('express').Router();
const controller = require('../../db/questionController');

router.get('/', controller.findAll)

module.exports = router;