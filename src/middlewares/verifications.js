const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.name': 'Please enter an valid name',
    'string.empty': 'Please enter your name',
    'any.required': 'Please enter your name'
  }),
  lastName: Joi.string().required().messages({
    'string.lastName': 'Please enter an valid last name',
    'string.empty': 'Please enter your last name',
    'any.required': 'Please enter your last name'
  }),
  email: Joi.string().email().min(6).max(60).required().messages({
    'string.email': 'Please enter an valid email',
    'string.min': 'email must be at least 6 characters',
    'string.max': 'email must be at most 60 characters',
    'string.empty': 'Please enter your email',
    'any.required': 'Please enter your email'
  }),
  password: Joi.string().alphanum().min(5).max(60).required().messages({
    'string.password': 'Please enter an valid password',
    'string.alphanum': 'Please enter an valid password',
    'string.min': 'password must be at least 5 characters',
    'string.max': 'password must be at most 60 characters',
    'string.empty': 'Please enter your password',
    'any.required': 'Please enter your password'
  }),
  userImg: Joi.string().required().messages({
    'string.userImg': 'Please enter a valid URL of your image.',
    'string.empty': 'Please enter a URL of your image',
    'any.required': 'Please enter a URL of your image'
  }),
  userLocation: Joi.string().required().messages({
    'string.userLocation': 'Please enter a valid location country',
    'string.empty': 'Please enter your country of location',
    'string.required': 'Please enter your country of location'
  })
})

const userSchemaLogin = Joi.object({
  email: Joi.string().email().min(6).max(60).required().messages({
    'string.email': 'Please enter an valid email',
    'string.min': 'email must be at least 6 characters',
    'string.max': 'email must be at most 60 characters',
    'string.empty': 'Please enter your email',
    'any.required': 'Please enter your email'
  }),
  password: Joi.string().alphanum().min(5).max(60).required().messages({
    'string.password': 'Please enter an valid password',
    'string.alphanum': 'Please enter an valid password',
    'string.min': 'password must be at least 5 characters',
    'string.max': 'password must be at most 60 characters',
    'string.empty': 'Please enter your password',
    'any.required': 'Please enter your password'
  }),
})

const verifyDataCity = (req, res, next) => {

  let {city, country, linkImg, description} = req.query

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
}

const verifyAuthData = (req, res, next) => {
  const payload = req.body;
  const userValidated = userSchema.validate(payload, {abortEarly: false});

  if(userValidated.error){
    return res.status(400).json({message: userValidated.error.details.map((error) => error.message)})
  }
  next()
};

const verifyAuthDataLogin = (req, res, next) => {
  const payload = req.body;
  const userValidated = userSchemaLogin.validate(payload);

  if(userValidated.error){
    return res.status(400).json({message: userValidated.error.details.map((error) => error.message)})
  }
  next()
};

module.exports = {verifyDataCity, verifyAuthData, verifyAuthDataLogin}