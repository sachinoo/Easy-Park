const mongoose = require("mongoose");
const guestSchema = new mongoose.Schema(
  {
    location: {
      type: "string",
      required: true,
    },
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    phoneNumber: {
      type: "Number",
      required: true,
    },
    unitNumber: {
      type: "string",
      required: true,
    },
    vehicleMake: {
      type: "string",
      required: true,
    },
    vehicleModel: {
      type: "string",
      required: true,
    },
    lisencePlate: {
      type: "string",
      required: true,
    },
    last4Digits: {
      type: "number",
      required: true,
    },
    spotNumber: {
      type: "string",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
guestSchema.index({ createdAt: 1 }, { expireAfterSeconds: 500 });

const guestVehicleInfo = mongoose.model("guestVehicleInfo", guestSchema);
module.exports = guestVehicleInfo;
