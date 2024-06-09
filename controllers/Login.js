import UserModel from "../models/users.js";

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await UserModel.findOne({ userName });
    if (!user) {
      return res.status(401).json({ message: `Worng username and password` });
    }
    const userId = user._id;
    const name = user.fname + " " + user.lname;
    const img = user.img;

    res.status(200).json({ message: `Login successful`, name, userId, img });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
export default login;
