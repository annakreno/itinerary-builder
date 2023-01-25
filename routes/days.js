var express = require('express');
const days = require('../controllers/days.js');
var router = express.Router();
const daysCtrl = require('../controllers/days.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/visits/:id/days/:dayId', ensureLoggedIn, daysCtrl.edit);


module.exports = router;
