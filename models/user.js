const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
});

userSchema.plugin(passportLocalMongoose);

// mongoose.model("User", userSchema);
// module.exports = mongoose.model("User");

module.exports = mongoose.model("User", userSchema);
