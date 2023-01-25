const Visit = require('../models/visit');
const Activity = require('../models/activity');

module.exports = {
    create,
};

function create(req, res) {
    // create activity
    Activity.create(req.body, function(err, activity) {
        //find visit
        Visit.findById(req.params.id, function(err, visit) {
            //find day
            const day = visit.days.filter(function(day) {
                console.log('day id', day._id);
                return day._id == req.params.dayId;
            })[0];
            //add activity id to day.activities
            day.activities.push(activity._id);
            visit.save(function(err) {
                res.redirect(`/visits/${visit._id}/days/${day._id}`);
            })
        });
    })
}