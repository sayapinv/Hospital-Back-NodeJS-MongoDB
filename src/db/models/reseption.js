const mongose = require('mongoose');

const { Schema } = mongose;

const reseptionScheme = new Schema({

    name: String,
    doctor: String,
    date: Date,
    complaint: String,
    number: String
  
  
});

module.exports = Reception = mongose.model('reception', reseptionScheme);