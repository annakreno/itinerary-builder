var express = require('express');
var router = express.Router();
const daysCtrl = require('../controllers/days.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/visits/:id/days/:dayId', ensureLoggedIn, daysCtrl.show);
router.put('/visits/:id/days/:dayId', ensureLoggedIn, daysCtrl.updateOne);
router.post('/visits/:id/days', ensureLoggedIn, daysCtrl.create);
router.delete('/visits/:id/days/:dayId', ensureLoggedIn, daysCtrl.deleteOne);

module.exports = router;
