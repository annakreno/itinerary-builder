const Visit = require('../models/visit');
const Activity = require('../models/activity');

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
    Visit.findById(req.params.id).populate('days.activities').exec(function(err, visit) {
        console.log('visit', visit);
        const day = visit.days.filter(function(day) {
            console.log('day id', day._id);
            return day._id == req.params.dayId;
        })[0];
        console.log('day', day);
        console.log('day._id:', day._id);
        const activities = day.activities
        console.log('activities', activities)
        res.render('days/show', {title: 'Edit Day', visit, day, activities});
        
    })
}


