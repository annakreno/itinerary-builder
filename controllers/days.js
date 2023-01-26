const Visit = require('../models/visit');
const Activity = require('../models/activity');

module.exports = {
    create,
    show,
    updateOne,
    deleteOne,
};

function create(req, res) {
    Visit.findById(req.params.id, function(err, visit) {
        visit.days.push(req.body);
        visit.save(function(err) {
            res.redirect(`/visits/${visit._id}`);
        })
    });
}

function show(req, res) {
    Visit.findById(req.params.id).populate('days.activities').exec(function(err, visit) {
        const day = visit.days.filter(function(day) {
            return day._id == req.params.dayId;
        })[0];
        const defaultDate = day.date.toISOString().substring(0,16);
        const activities = day.activities;
        res.render('days/show', {title: `${day.name}`, visit, day, defaultDate, activities});
    })
}

function updateOne(req, res) {
    Visit.findById(req.params.id, function(err, visit) {
        const day = visit.days.filter(function(day) {
            console.log('day id', day._id);
            return day._id == req.params.dayId;
        })[0];
        day.name = req.body.name;
        day.date = req.body.date;
        visit.save(function(err) {
            res.redirect(`/visits/${visit._id}/days/${day._id}`)
        });
    });
}

function deleteOne(req, res) {
    Visit.findById(req.params.id, function(err, visit) {
        // const day = visit.days.filter(function(day) {
        //     return day._id == req.params.dayId;
        // })[0];
        visit.days.remove(req.params.dayId);
        visit.save();
        res.redirect(`/visits/${visit._id}`);
    });
}


