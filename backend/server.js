require("dotenv").config();

const express = require("express");
const workoutRoute = require("./routes/workout");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.use("/api/workouts", workoutRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
