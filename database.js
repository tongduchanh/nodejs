var promise = require('bluebird')
var options = {
  // Initialization Options
  promiseLib: promise
};
var pgp = require('pg-promise')(options)
var database = pgp('postgres://admin:A12345678@18.140.70.9:5432/beta')

module.exports = database