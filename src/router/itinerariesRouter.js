const express = require('express')
const itinerariesRouter = express.Router()
const { getItineraries, getItinerary, getItinerariesByCity, addItinerary, deleteItinerary, updateItinerary } = require('../controllers/itinerariesController')
const { verifyDataCity } = require('../middlewares/verifications')
const { passportVerificator } = require('../middlewares/auth')

const router = express.Router()

itinerariesRouter.get("/", getItineraries)
itinerariesRouter.get("/:id", getItinerary)
itinerariesRouter.get("/city/:cityId", getItinerariesByCity)
itinerariesRouter.post("/", passportVerificator.authenticate("jwt", {session: false} ),  addItinerary)
itinerariesRouter.delete("/", passportVerificator.authenticate("jwt", {session: false} ), deleteItinerary)
itinerariesRouter.put("/:id", passportVerificator.authenticate("jwt", {session: false} ), updateItinerary)


module.exports = itinerariesRouter