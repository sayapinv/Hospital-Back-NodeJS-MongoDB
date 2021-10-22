const mongose = require('mongoose');

const { Schema } = mongose;

const registerScheme = new Schema({

  login: String,
  password: String,
  number: String
  
});

module.exports = User = mongose.model('login', registerScheme);