const express = require("express");
const router = express.Router();
const residentVehicle =  require( "../models/residentSchema");

const dotenv = require("dotenv")
dotenv.config()

router.get("/", (req, res) => {
    residentVehicle
      .find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(error);
      });
  });
  
  module.exports = router;