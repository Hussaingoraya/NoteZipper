const userModel = require("../../Models/UserModels/UserModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, pic } = req.body;
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User Already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      username,
      email,
      password: hashedpassword,
      pic,
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log("Internal server error", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email or password is invalid" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.status(200).json("Login Successfully");
  } catch (error) {
    console.log("Server error", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
