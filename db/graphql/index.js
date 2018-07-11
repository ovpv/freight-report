//api for trucks
const truckModel = require("../mongoose/models/trucks");
const tripsModel = require("../mongoose/models/trips");

const GqlData = {
  trucks: async () => {
    const trucksData = await truckModel.find({});
    return trucksData;
  },
  trips: async () => {
    const tripsData = await tripsModel.find({});
    return tripsData;
  },
  truck: async ({ id }) => {
    const truckData = await truckModel.find({ id });
    console.log(truckData);
    return truckData[0];
  },
  trip: async ({ id }) => {
    const tripData = await tripModel.find({ id });
    console.log(tripData);
    return tripData[0];
  }
};

module.exports = GqlData;
