var express = require('express');
const visits = require('../controllers/visits.js');
var router = express.Router();
const visitsCtrl = require('../controllers/visits.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', ensureLoggedIn, visitsCtrl.index);
router.get('/new', ensureLoggedIn, visitsCtrl.new);
router.post('/', ensureLoggedIn, visitsCtrl.create);
router.get('/:id', ensureLoggedIn, visitsCtrl.show);

module.exports = router;
