var express = require('express');
var router = express.Router();

const activitiesCtrl = require('../controllers/activities');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/visits/:id/days/:dayId/activities', ensureLoggedIn, activitiesCtrl.create);

module.exports = router;