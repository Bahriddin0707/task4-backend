require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://itransition-task4-intern.netlify.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use route files
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

/// connect to database
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`The seerver is running on ${PORT}`));
