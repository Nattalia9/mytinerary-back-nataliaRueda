const express = require('express')
const router = express.Router()
const citiesRouter = require("./citiesRouter.js")
const itinerariesRouter = require("./itinerariesRouter.js");
const authRouter = require('./auth.js');

router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/user', authRouter);

module.exports = router