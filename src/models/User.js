const {Schema, model, Types} = require('mongoose')

const schemaUser = new Schema( {
  email: {
    type: String,
    required: true, 
  },
  password: {
    type: String,
    required: true, 
  },
  name: {
    type: String,
    required: true, 
  },
  lastName: {
    type: String,
    required: true, 
  },
  userImg: {
    type: String,
    required: true, 
  },
  userLocation: {
    type: String, 
    required: true,
  }
})

const User = model("User", schemaUser)

module.exports = User