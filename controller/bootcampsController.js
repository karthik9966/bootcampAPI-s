const Bootcamp = require("../models/bootcampsModel");
const asyncHandler = require("../middleware/async");

exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).send({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
});

exports.getBootcampById = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    next();
  }
  res.status(200).send({ success: true, data: bootcamp });
});

exports.postBootcamps = asyncHandler(async (req, res, next) => {
  const createdBootcamp = await Bootcamp.create(req.body);
  res.status(201).send({
    success: true,
    data: createdBootcamp,
  });
});

exports.updateBootcampsById = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).send({ success: true, data: bootcamp });
});

exports.deleteBootcampsById = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) res.status(200).send({ success: true, message: "deleted" });
});
