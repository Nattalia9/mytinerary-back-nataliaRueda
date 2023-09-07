const bcrypt = require('bcrypt');

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

const verifyPassword = (passwordPlane, hashPassword) => {
  const isValid =bcrypt.compareSync(passwordPlane, hashPassword)
  return isValid 
}

module.exports = { hashPassword, verifyPassword }