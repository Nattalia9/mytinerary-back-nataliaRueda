require('dotenv').config()
const {connect} = require('mongoose');

const URI = process.env.DATABASE_URL


connect(URI)
  .then(()=> {
    console.log("Connect success to database")
  })
  .catch(()=> {
    console.log("Error connecting to database")
  })
