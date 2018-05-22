const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema({
    id: Number,
    license:String,
    model:String,
    trips: [Number],
    insurance: Number,
    earning: {
        monthly:Number,
        total: Number
    },
    expense: {
        monthly:Number,
        total: Number
    }
});

module.exports = TruckSchema;