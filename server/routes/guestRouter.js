const express = require("express");
const router = express.Router();
const guestVehicleInfo = require("../models/guestSchema");
const twilio = require("twilio");
const dotenv = require("dotenv")
dotenv.config()

router.post("/", (req, res) => {
  const location = req.body.location;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const unitNumber = req.body.unitNumber;
  const vehicleMake = req.body.vehicleMake;
  const vehicleModel = req.body.vehicleModel;
  const lisencePlate = req.body.lisencePlate;
  const last4Digits = req.body.last4Digits;
  const spotNumber = req.body.spotNumber;

  const registerVehicle = new guestVehicleInfo({
    location,
    firstName,
    lastName,
    phoneNumber,
    unitNumber,
    vehicleMake,
    vehicleModel,
    lisencePlate,
    last4Digits,
    spotNumber,
  });

  registerVehicle.save();

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: `Hello ${firstName} \nRegistration successful \n ${vehicleMake + " " + vehicleModel + " \n at " + location }\n THANK YOU! FOR USING EASY PARK`,
      messagingServiceSid: "MG2669a09a2589e07a26b76e3ba5c3c0bf",
      to: phoneNumber,
    })
    .then((message) => console.log(message.sid))
    .done();
});

router.get("/", (req, res) => {
  guestVehicleInfo
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(error);
    });
});

module.exports = router;
