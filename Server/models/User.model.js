const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const { Schema, model } = mongoose;

const UserSchema = Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    avatar_url: String,
    email: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

const UserModel = model("user", UserSchema);

module.exports = {
  UserModel,
};
