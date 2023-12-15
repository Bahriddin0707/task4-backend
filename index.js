const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

/// connect to database
connectDB();

app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use route files
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(PORT, console.log(`The server is running on ${PORT}`));
