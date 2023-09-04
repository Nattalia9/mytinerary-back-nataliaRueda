const express = require('express')
const router = express.Router()
const citiesRouter = require("./citiesRouter.js")
const itinerariesRouter = require("./itinerariesRouter.js")

router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);

module.exports = router