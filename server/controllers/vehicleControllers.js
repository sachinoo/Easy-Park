const Vehicles = require("../models/guestSchema");
const asyncHandler = require("express-async-handler");

const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicles.find({ user: req.user._id });
  res.json(vehicles);
});

const getVehiclesByID = asyncHandler(async (req, res) => {
  const vehicles = await Vehicles.findById(req.params.id);

  if (vehicles) {
    res.json(vehicles);
  } else {
    res.status(404).json({ message: " Vehicles not found" });
  }
  res.json(vehicles);
});

module.exports = { getVehicles, getVehiclesByID };
