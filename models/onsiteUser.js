const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const onsiteUserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const onsiteUser = mongoose.model("onsiteUser", onsiteUserSchema);

module.exports = onsiteUser;
