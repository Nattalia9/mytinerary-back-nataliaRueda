const express = require('express')
const authRouter = express.Router()
const { register, login, authenticated } = require('../controllers/authController')
const { verifyAuthData, verifyAuthDataLogin } = require('../middlewares/verifications')
const { hashPassword, verifyUserexists, verifyPassword, generateToken, passportVerificator } = require('../middlewares/auth')

authRouter.post("/register", verifyAuthData, hashPassword, register)
authRouter.post("/login", verifyAuthDataLogin, verifyUserexists, verifyPassword, generateToken, login)
authRouter.post("/authenticated", passportVerificator.authenticate("jwt", {session: false} ), generateToken, authenticated)

module.exports = authRouter