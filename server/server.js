const express = require("express");
const notes = require("./notes");
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
const spotUpdater = require('./routes/spotRouter')


app.use(express.urlencoded({
    extended: true
 }));
 app.use(express.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



app.use(cors());
dotenv.config();
const PORT = process.env.PORT;


connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
// app.use(notFound);
// app.use(errorHandler);
app.use("/guest", guestRouter);
app.use("/contact_us", contact_usRouter);
app.use("/search", ParkingsRouter);
app.use('/updatespot', spotUpdater)


app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
