const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config({ path: "./config/config.env" });

const bootcampModel = require("./models/bootcampsModel");

const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

mongoose
  .connect(process.env.Mongo_Uri)
  .then(() => bootcampModel.create(bootcamps))
  .then(() => {
    console.log("Data saved");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
