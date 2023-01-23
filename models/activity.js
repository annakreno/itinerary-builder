const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  born: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);