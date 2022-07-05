const router = require('express').Router();
const controller = require('../../db/questionController');

router.get('/', controller.findAll)
router.get('/range', controller.rangeOnly)
router.get('/allcats', controller.categories)
router.get('/:id', controller.findByCat)

module.exports = router;