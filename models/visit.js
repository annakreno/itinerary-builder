const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
    name: String,
    date: {
        type: Date,
        default: new Date(),
        required: true,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity',
    }],
}, {
    timestamps: true
});

const visitSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    visitName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        default: function() {return Date.now()+ 1*24*60*60*1000}
    },
    endDate: {
        type: Date,
        default: function() {return Date.now() + 8*24*60*60*1000}
    },
    days: [daySchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Visit', visitSchema);