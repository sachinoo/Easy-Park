const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      apartment: user.apartment,
      unit: user.unit,
      guestcode: user.guestcode,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, apartment, unit, guestcode, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404);
    throw new Error("User already Exists");
  }
  const user = await User.create({
    name,
    email,
    phone,
    apartment,
    unit,
    guestcode,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      apartment: user.apartment,
      unit: user.unit,
      guestcode: user.guestcode,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("USER nOT fOUND");
  }
});

module.exports = { registerUser, authUser };
