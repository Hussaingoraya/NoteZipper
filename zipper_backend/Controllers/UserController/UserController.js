const UserModel = require("../../Models/UserModels/UserModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, pic } = req.body;
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User Already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const user = new UserModel.create({
      username,
      email,
      password: hashedpassword,
      pic,
    });
    await user.save();
    res.status(201).json({ message: "User created succefully", user });
  } catch (error) {
    console.log("Internal server error", error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "email or password is invalid" });
    }
    res.status(200).json("Login Successfully");
  } catch (error) {
    console.log("Server error", error.message);
  }
};
module.exports = {
  registerUser,
  loginUser,
};
