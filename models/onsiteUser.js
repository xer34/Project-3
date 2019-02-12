const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const onsiteUserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  location: {
    type: String,
    required: false,
    // validate: {
    //   isAsync: true,
    //   validator: function(v, cb) {
    //     setTimeout(function() {
    //       var zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    //       var msg = v + " is not a US zip code!";
    //       // First argument is a boolean, whether validator succeeded
    //       // 2nd argument is an optional error message override
    //       cb(zipRegex.test(v), msg);
    //     }, 5);
    //   },
    //   // Default error message, overridden by 2nd argument to `cb()` above
    //   message: "Not a valid Zip"
    // }
  },
  picture: { type: String, required: false },
  banner: { type: String, required: false }
});

const onsiteUser = mongoose.model("onsiteUser", onsiteUserSchema);

module.exports = onsiteUser;
