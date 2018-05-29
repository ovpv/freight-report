const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema({
    id: Number,
    truck:Number,
    freight_amount:Number,
    line_adv:Number,
    from:String,
    to: String,
    expense: {
        petrol:Number,
        repairs:Number,
        driver:Number,
        toll:Number,
        total:Number
    },
    gross_earning:Number,
    net_earning: Number
});

module.exports = TruckSchema;