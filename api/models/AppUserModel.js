'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//import { isEmail } from 'validator';

var AppUserSchema = new Schema({
  userName: {
    type: String,
    required: 'Kindly enter user name'
  },
  userEmail: {
    type: String,
    required: 'Kindly enter user email',
    //validate: [isEmail, 'please enter email']  
  },
  userAge: {
    type: Number,
    required: 'Kindly enter user age'
  },
});

module.exports = mongoose.model('AppUserModel', AppUserSchema);


