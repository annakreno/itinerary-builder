var express = require('express');
const visits = require('../controllers/visits.js');
var router = express.Router();
const visitsCtrl = require('../controllers/visits.js');
const visit = require('../models/visit.js');

router.get('/', visitsCtrl.index);
router.get('/new', visitsCtrl.new);
router.post('/', visitsCtrl.create);
router.get('/:id', visitsCtrl.show);

module.exports = router;
