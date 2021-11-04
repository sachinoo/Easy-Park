const express = require("express");
const {
  registerUser,
  authUser,
  find,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/").get(find);
module.exports = router;

