const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { dbConnection } = require("./config/db");
const bootcamps = require("./routes/bootcamps");
const error = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

app.use(error);

const PORT = process.env.PORT || 3000;

dbConnection();

app.listen(3000);
