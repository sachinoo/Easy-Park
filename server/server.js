const express = require("express");
const notes = require("./notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
// const MongoClient = require("mongodb").MongoClient;
const vehiclesRoutes = require("./routes/vehiclesRoutes");
const ejs = require("ejs");
// const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const guestRouter = require("./routes/guestRouter");
const contact_usRouter = require("./routes/contact_usRouter");
const parkingLoc = require("./models/parkingsSchema");
const ParkingsRouter = require("./routes/parkingsRoute");

app.use(express.json());

// const User = require("./model/userSchema");
// const Authenticate = require("./middleware/authenticate");

app.use(cors());
// app.use(require('./router/auth'));
dotenv.config();
const PORT = process.env.PORT;

// var collection;

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use("/guest", guestRouter);
app.use("/contact_us", contact_usRouter);
app.use("/search", ParkingsRouter);

// const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
