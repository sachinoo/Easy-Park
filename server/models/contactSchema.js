const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  message: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const contactInfo = mongoose.model("contactUsInfo", contactSchema);
module.exports = contactInfo;
