const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const vehiclesRoutes = require("./routes/vehiclesRoutes");
const ejs = require("ejs");
const app = express();
const cors = require("cors");
const guestRouter = require("./routes/guestRouter");
const contact_usRouter = require("./routes/contact_usRouter");
const parkingLoc = require("./models/parkingsSchema");
const ParkingsRouter = require("./routes/parkingsRoute");
app.use(express.json());

app.use(cors());
// app.use(require('./router/auth'));
dotenv.config();
const PORT = process.env.PORT;

// var collection;

connectDB();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/guest", guestRouter);
app.use("/contact_us", contact_usRouter);
app.use("/search", ParkingsRouter);




// const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
