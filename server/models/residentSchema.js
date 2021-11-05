const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
  make: {
    type: String,
  },
  color: {
    type: String,
  },
  garage: {
    type: String,
  },

  licenseplate: {
    type: String,
  },

  model: {
    type: String,
  },
  year: {
    type: Number,
  },
});

const residentParking = mongoose.model("residentvehicleinfos", residentSchema);
module.exports = residentParking;
