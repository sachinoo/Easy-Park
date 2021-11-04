const express = require("express");
const router = express.Router();
const contactUs = require("../models/contactSchema");

router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  const contactInfo = new contactUs({
    firstName,
    lastName,
    email,
    message,
  });

  contactInfo.save();
});

module.exports = router;
