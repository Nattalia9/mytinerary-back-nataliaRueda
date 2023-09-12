const { verifyPassword } = require("../middlewares/auth")
const User = require("../models/User")

const register = async (req, res) => {
  try {
    const payload = req.body
    const userExists = await User.findOne({email: payload.email})

    if (userExists) {
      return res.status(403).json({message: "User already exists"})
    }
    const userCreated = await User.create(payload)
  
  res.status(200).json({
    message: "User created successfully",
    userCreated
  })
    
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

const login = async (req, res) => {
  try {

  res.status(200).json({
  message: "Successfully logged in",  
  token: req.token,
  success: true,
  user: {
    email: req.user.email,
    _id: req.user._id,
    userImg: req.user.userImg
  }
  })

  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

const authenticated = async (req, res) => {
  try {

  res.status(200).json({
  message: "Successfully authenticated",  
  token: req.token,
  success: true,
  user: {
    email: req.user.email,
    _id: req.user._id,
    userImg: req.user.userImg
  }
  })

  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

module.exports = { register, login, authenticated }