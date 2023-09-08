const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const unlinkfile = require("../../utils/unlinkFile");

const User = require("./model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      image: req.file.filename,
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      data: { user: savedUser },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
