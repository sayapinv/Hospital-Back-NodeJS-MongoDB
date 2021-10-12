const mongose = require('mongoose');

const { Schema } = mongose;

const loginScheme = new Schema({

  login: String,
  password: String
  
});

module.exports = User = mongose.model('login', loginScheme);