const express = require('express')
const authRouter = express.Router()
const { register, login } = require('../controllers/authController')
const { verifyAuthData, verifyAuthDataLogin } = require('../middlewares/verifications')
const { hashPassword } = require('../middlewares/auth')

authRouter.post("/register", verifyAuthData, hashPassword, register)
authRouter.post("/login", verifyAuthDataLogin, login)

module.exports = authRouter