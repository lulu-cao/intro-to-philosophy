const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const readingsSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
});

const Readings = mongoose.model("Readings", readingsSchema);

module.exports = Readings;
