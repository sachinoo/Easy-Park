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

const find = (req, res)=>{

  if(req.query.id){
      const id = req.query.id;

      User.findById(id)
          .then(data =>{
              if(!data){
                  res.status(404).send({ message : "Not found user with id "+ id})
              }else{
                  res.send(data)
              }
          })
          .catch(err =>{
              res.status(500).send({ message: "Erro retrieving user with id " + id})
          })

  }else{
      User.find()
          .then(user => {
              res.send(user)
          })
          .catch(err => {
              res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
          })
  }

  
};
module.exports = { registerUser, authUser, find};
