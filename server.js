const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const authRoute = require("./routers/authRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((err) => console.error("Could not connect to database", err));

const PORT = process.env.PORT || 3000;

app.use("/api", authRoute);
app.listen(PORT, () => {
  console.log("Server is running on Port: 3000");
});
