'use strict';
module.exports = function(app) {
  var controller = require('../controllers/AppUsersController');

  app.route('/api/app-users')
    .get(controller.getAppUsers)
    .post(controller.postAppUser);

  app.route('/api/app-users/:taskId')
    .get(controller.getAppUserById)
    .put(controller.putAppUser)
    .delete(controller.deleteAppUser);
};