const express = require('express')
const authRouter = express.Router()
const { register, login } = require('../controllers/authController')
const { verifyAuthData, verifyAuthDataLogin } = require('../middlewares/verifications')
const { hashPassword, verifyUserexists, verifyPassword, generateToken } = require('../middlewares/auth')

authRouter.post("/register", verifyAuthData, hashPassword, register)
authRouter.post("/login", verifyAuthDataLogin, verifyUserexists, verifyPassword, generateToken, login)

module.exports = authRouter