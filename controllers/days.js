const visit = require('../models/visit');
const Visit = require('../models/visit');

module.exports = {
    create,
    edit,
};

function create(req, res) {
    Visit.findById(req.params.id, function(err, visit) {
        visit.days.push(req.body);
        visit.save(function(err) {
            res.redirect(`/visits/${visit._id}`);
        })
    });
}

function edit(req, res) {
    //use visit id from URL to find a visit
    Visit.findById(req.params.id, function(err, visit) {
        //find the selected day using dayId from URL
        visit.days.find({_id: req.params.dayId}, function(err, day) {
            // find all referenced activities
            const activities = day.activities
            res.render('days/show', {title: 'Edit Day'}, day, activities)
        })   
    });
}
