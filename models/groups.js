const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupsSchema = new Schema({
  username: { type: String, required: true },
  location: { type: String, required: true },
  picture: { type: String, required: false },
  company: { type: String, required: true }

});

const group = mongoose.model("onsiteUser", groupsSchema);

module.exports = group;
