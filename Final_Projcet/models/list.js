const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 400,
  },
  description: {
    type: String,
    required: true,
  },
});

const list = mongoose.model("list", listSchema);

module.exports = list;
