const mongoose = require('mongoose');
const tripsSchema = require('../schemas/trips');

const tripsModel = mongoose.model('trips',tripsSchema);

module.exports = tripsModel;