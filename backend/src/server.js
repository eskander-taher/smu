const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;

// database
const connectDB = require("./config/connectDB");
connectDB(process.env.DATABASE_URL);

// Express app initailization
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use("/uploads", authMiddleware, express.static("uploads"));
app.use(express.static("uploads"));

const logger = require("./middlewares/logger");
app.use(logger);

// resources routes
app.use("/api/users", require("./components/users"));


// Middleware setup: Formating responding errors
const { errorHandler } = require("./middlewares/errorHandler");
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));
