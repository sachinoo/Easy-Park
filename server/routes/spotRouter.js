const express = require("express");
const router = express.Router();
const parking = require("../models/parkingsSchema");

router.put(`/updatespot`, (req, res) => {
  const location = req.body.location;
  const spotNumber = req.body.spotNumber;
  console.log(location)
  console.log(spotNumber)

  parking.findOneAndUpdate({ "location": location},
    {$pull : {$available:{$elemMatch: {item : spotNumber}}}})

});

module.exports = router;
