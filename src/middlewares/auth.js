const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const hashPassword = (req, res, next) => {
  try {
    const passwordPlane = req.body.password
    const hashPassword = bcrypt.hashSync(passwordPlane, 10)

    req.body.password = hashPassword

    next()
  } catch (error) {
    res.status(500).json({ error: err});
  }
};

const verifyPassword = (req, res, next) => {
  const passwordPlane = req.body.password
  const hashPassword = req.user.password
  const isValid = bcrypt.compareSync(passwordPlane, hashPassword)
  
  if(isValid) {
    next()
  }else {
    res.status(400).json({message: "wrong password"})
  }
}

const verifyUserexists = async (req, res, next) => {
  const {password, email} = req.body

  const userFounded = await User.findOne({email: email})

  if (userFounded) {
    req.user = userFounded;
    next()
  }else {
    res.status(400).json({message: 'user not founded'});
  }
}

const generateToken =(req, res, next) => {
  try {
    let secretKey = 'claveSuperSecreta'
    let token = jwt.sign({email: req.body.email}, secretKey, {expiresIn: 60*3})

    req.token = token
    next()
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = { hashPassword, verifyPassword, verifyUserexists, generateToken }