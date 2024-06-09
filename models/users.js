import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  userName: { type: String },
  img: { type: String },
  password: { type: String },
});
const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
