const { model, Types, Schema} = require('mongoose')

const schemaItinerary = new Schema({
  title: {
    type: String, 
    required: true
  },
  userName: {
    type: String, 
    required: true
  },
  userImg: {
    type: String,
    required: true, 
  },
  userLocation: {
    type: String,
    required: true, 
  },
  _city: {
    type: Types.ObjectId,
    ref: 'City' 
  },
  price: {
    type: Number,
    required: true, 
  },
  duration: {
    type: Number,
    required: true, 
  },
  likes: {
    type: Array,
    required: true, 
  },
  hashtags: {
    type: Array,
    required: true, 
  }
})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary