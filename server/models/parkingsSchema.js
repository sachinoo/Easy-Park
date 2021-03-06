const mongoose = require("mongoose");

const parkingsSchema = new mongoose.Schema({
  location: {
    type: String
  },
  numbers: {
    type: Number
  },
  available: [
    {"id":Number, 
      "name":String, 
      "value":Boolean}
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const parkingLocation = mongoose.model("parkings", parkingsSchema);
module.exports = parkingLocation;

