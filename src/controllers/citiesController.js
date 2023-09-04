const City = require("../models/City")


const getCities = async(req, res)=> {
  const query = {}
  if( req.query.city ) {
    query.city = { $regex: "^"+ req.query.city, $options: 'i'}
  }
  try{
    let cities = await City.find( query ).populate({
      path: 'itineraries',
      select: 'title'
    })
    res.status(200).json({cities})
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const getCity = async (req, res)=> {
  try {
    let {id} = req.params
    let cityFound = await City.findById(id).populate('itineraries')
    res.status(200).json({cityFound})
  }catch(err) {
    res.status(500).json({message: err})
  }  
}


const addCity = async (req, res)=> {
  try {
    let payload = req.body
    // let querys = req.query
    let cityCreated = await City.create(payload)
    res.status(201).json({
      "message": "city has been added",
      "city": cityCreated
    })
  }catch (err) {
    res.status(500).json({message: err})
  }
}


const deleteCity = async (req, res)=> {
  try {
    let {id} = req.query
    await City.deleteOne({_id: id})
    res.status(201).json({
      "message": "city has been deleted",
    })
  }catch (err) {
    res.status(500).json({message: err})
  }
}


const updateCity = async (req, res)=> {
  try {
    let {id} = req.params
    let newDataCity = await City.findByIdAndUpdate({_id:id}, {$set:req.body}, {new:true})
    res.status(201).json({
      "message": "The data has been updated", "Modified city": newDataCity
    })
  }catch (err) {
    res.status(500).json({message: err})
  }
}


module.exports = { getCities, getCity, addCity, deleteCity, updateCity}