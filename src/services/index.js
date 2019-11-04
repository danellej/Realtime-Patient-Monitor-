const patients = require('./patients/patients.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(patients);
  app.configure(users);
};
