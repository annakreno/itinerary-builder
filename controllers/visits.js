const Activity = require('../models/activity');
const Visit = require('../models/visit');

module.exports = {
    index,
    new: newVisit,
    create,
    show,
};

function index(req, res) {
    Visit.find({user: req.user._id}, function(err, visits) {
        res.render('visits/index', {title: 'My Visits', visits});
    });
}

function newVisit(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    res.render('visits/new', { title: 'Add Visit' });
}

function create(req,res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      };
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      const visit = new Visit(req.body);
      visit.save(function(err) {
        if (err) return res.redirect('/visits/new');
        console.log(visit);
        res.redirect('/visits');
      });
}

function show(req, res) {
    Visit.findById(req.params.id, function(err, visit) {
        console.log(visit);
        Activity.find({_id: visit.days.activities}, function(err, activities) {
            res.render('visits/show', {title: 'Visit Details', visit, activities});
        })
        
    })
};