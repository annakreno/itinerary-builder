var express = require('express');
var router = express.Router();
const daysCtrl = require('../controllers/days.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/visits/:id/days/:dayId', ensureLoggedIn, daysCtrl.edit);
router.post('/visits/:id/days', ensureLoggedIn, daysCtrl.create);

module.exports = router;
