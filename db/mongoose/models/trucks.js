const mongoose = require("mongoose");
const truckSchema = require("../schemas/trucks");

const trucksModel = mongoose.model("trucks", truckSchema);

module.exports = trucksModel;
