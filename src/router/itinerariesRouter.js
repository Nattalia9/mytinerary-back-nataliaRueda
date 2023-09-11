const express = require('express')
const itinerariesRouter = express.Router()
const { getItineraries, getItinerary, getItinerariesByCity, addItinerary, deleteItinerary, updateItinerary } = require('../controllers/itinerariesController')
const { verifyDataCity } = require('../middlewares/verifications')

const router = express.Router()

itinerariesRouter.get("/", getItineraries)
itinerariesRouter.get("/:id", getItinerary)
itinerariesRouter.get("/city/:cityId", getItinerariesByCity)
itinerariesRouter.post("/", addItinerary)
itinerariesRouter.delete("/", deleteItinerary)
itinerariesRouter.put("/:id", updateItinerary)


module.exports = itinerariesRouter