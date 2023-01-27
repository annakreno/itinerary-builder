const Visit = require('../models/visit');
const Activity = require('../models/activity');
const activity = require('../models/activity');

module.exports = {
    create,
    deleteOne,
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

function deleteOne(req, res) {
    Activity.findById(req.params.activityId, function(err, activity) {
        console.log("This is the selected activity:", activity);
    });
    Visit.findById(req.params.id, function(err, visit) {
        const day = visit.days.filter(function(day) {
            return day._id == req.params.dayId;
        })[0];
        day.activities.remove(req.params.activityId);
        visit.save();
        res.redirect(`/visits/${visit._id}/days/${day._id}`);
    });
}