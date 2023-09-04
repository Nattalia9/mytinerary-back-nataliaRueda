const City = require("../models/City")
const Itinerary = require("../models/Itinerary")


const getItineraries = async(req, res) => {
  try {
      const itineraries = await Itinerary.find().populate
      ({
          path: '_city',
          select: 'city'
      })
      res.status(200).json({itineraries})

  } catch (error) {
      res.status(500).json( {error: error} )
  }

}

const getItinerary = async (req, res)=> {
  try {
    let {id} = req.params
    let itineraryFound = await Itinerary.findById(id).populate({
      path: '_city',
      select: 'city'
    })
    res.status(200).json({itineraryFound})
  }catch(err) {
    res.status(500).json({message: err})
  }  
}

const getItineraryByCity = async (req, res)=> {
  try {
    let {id} = req.params
    let cityFound = await City.findById(id)

    if (!cityFound) {
      return res.status(404).json({ message: "City not found" });
    }

    const itineraryFound = await Itinerary.find({ _city: cityFound._id })

    res.status(200).json({
      message: "Itineraries found successfully",
      itinerary: itineraryFound})
  }catch(err) {
    res.status(500).json({message: err})
  }  
}

const addItinerary = async (req, res)=> {
  try {
    let {id} = req.query

    let cityFound = await City.findById(id)

    let dataItinerary = req.body

    let newItinerary = await Itinerary.create({...dataItinerary, _city: cityFound})

    await cityFound.updateOne({ itineraries: [...cityFound.itineraries, newItinerary] })

    let cityFoundUpdated = await City.findById(id).populate('itineraries')
    res.status(200).json({
      message: "City has been updated successfully",
      city: cityFoundUpdated
    })
  }catch (err) {
    res.status(500).json({message: err.message})
  }
}

const deleteItinerary = async (req, res)=> {
  try {
    let {id} = req.query
    await Itinerary.deleteOne({_id: id})
    res.status(201).json({
      "message": "Itinerary has been deleted",
    })
  }catch (err) {
    res.status(500).json({message: err})
  }
}

const updateItinerary = async (req, res)=> {
  try {
    let {id} = req.params
    let newDataItinerary = await Itinerary.findByIdAndUpdate({_id:id}, {$set:req.body}, {new:true})
    res.status(201).json({
      "message": "The data has been updated", "Modified itinerary": newDataItinerary
    })
  }catch (err) {
    res.status(500).json({message: err})
  }
}

module.exports = { getItineraries, getItinerary, getItineraryByCity, addItinerary, deleteItinerary, updateItinerary}