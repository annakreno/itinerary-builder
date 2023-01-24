const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    formatted_address: {
        type: String,
        required: true,
    },
    url: String,
    place_id: String,
    type: String,
    business_status: String,
    opening_hours: String,
    price_level: String,
    rating: Number,
    user_ratings_total: Number,
    reservable: Boolean,
    time: Date,
    notes: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);