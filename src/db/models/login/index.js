const mongose = require('mongoose');

const { Schema } = mongose;

const loginScheme = new Schema({

  login: String,
  pass: String
  
});

module.exports = Login = mongose.model('login', loginScheme);