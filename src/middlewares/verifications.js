
const verifyDataCity = (req, res, next) => {

  let {city, country, linkImg, description} = req.query

  // if(!city || !country) {
  //   return res.status(400).json({message: 'Invalid city or country'})
  // }

  if(city == "") {
    return res.status(400).json({message: 'Invalid city'})
  }

  if(country == "") {
    return res.status(400).json({message: 'Invalid country'})
  }

  if(linkImg == "") {
    return res.status(400).json({message: 'Invalid image url'})
  }

  if(description == "") {
    return res.status(400).json({message: 'Invalid description'})
  }

  next()

  // if(numberCity == "0") {
  //   return res.status(400).json({message: 'Invalid numbercity'})
  // }

}

module.exports = {verifyDataCity}