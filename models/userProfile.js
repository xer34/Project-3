const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  familyName: String,
  givenName: String,
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("user", userSchema);

module.exports = user;
