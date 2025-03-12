const User = require("../../Models/UserModels/UserModel");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, pic } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User Already registered" });
    }

    const user = await User.create({ username, email, password, pic });
    res.status(201).json({ message: "User created succefully", user });
  } catch (error) {
    console.log("Internal server error", error.message);
  }
};

const loginUser =  async (req, res)=>{
  try {
    const {email , password} = req.body
    const user = await User.findOne({email})
    if (!user || user.password !== password) {
      return res.status(400).json({message:"email or password is invalid"})
      
    }
    res.status(200).json("Login Successfully")
  } catch (error) {
    console.log("Server error", error.message)
    
  }
}
module.exports = {
  registerUser,
  loginUser
};
