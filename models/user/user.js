const mongoose = require("mongoose");
//connection to mongoose

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate(val) {
      if (val.length > 8) {
        return true;
      }
      return false;
    },
  },
});

const User = new mongoose.model("User", schema);
module.exports = User;
