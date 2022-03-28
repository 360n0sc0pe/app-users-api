'use strict';


var mongoose = require('mongoose'),
AppUser = mongoose.model('AppUserModel');

exports.getAppUsers = function(req, res) {
  AppUser.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.postAppUser = function(req, res) {
  var newAppUser = new AppUser(req.body);
  newAppUser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.getAppUserById = function(req, res) {
  AppUser.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.putAppUser = function(req, res) {
  AppUser.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.deleteAppUser = function(req, res) {
  AppUser.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'successfully deleted' });
  });
};