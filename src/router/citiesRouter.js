const express = require('express')
const citiesRouter = express.Router()
const { getCities, getCity, addCity, deleteCity, updateCity } = require('../controllers/citiesController')
const { verifyDataCity } = require('../middlewares/verifications')

citiesRouter.get("/", getCities)
citiesRouter.get("/:id", getCity)
citiesRouter.post("/", verifyDataCity, addCity)
citiesRouter.delete("/", deleteCity)
citiesRouter.put("/:id", updateCity)

module.exports = citiesRouter