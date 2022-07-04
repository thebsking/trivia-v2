const path = require('path');
const apis = require('./api');
const router = require('express').Router();

router.use('/api', apis);


module.exports = router;