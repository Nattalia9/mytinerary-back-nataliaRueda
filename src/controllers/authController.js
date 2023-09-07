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
    const {password, email} = req.body

    const userFounded = await User.findOne({email: email})

    if (userFounded) {
      if(verifyPassword(password, userFounded.password)) {
        return res.status(200).json({ message: 'seccessfulley logged in', user: userFounded})
      }else{
        return res.status(400).json({ message: 'wrong password'})
      }

    }else {
      res.status(400).json({message: 'user not founded'});
    }


  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

module.exports = { register, login }