const router = require('express').Router();
const controller = require('../../db/locationController');

router
.route('/')
.get(controller.getLocations)

module.exports = router;