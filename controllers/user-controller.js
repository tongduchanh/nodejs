var db = require('../db')
var database = require('../database')
module.exports.index = (req, res) => {
  // database.any('SELECT * FROM authentication_user limit 10')
  res.render('users', {
    title: 'User List',
    users: db.get('users').value(),
    query: req.query
  })
}

module.exports.getCreate = (req, res) => {
  res.render('create')
}

module.exports.postCreate = (req, res) => {
  db.get('users').push(req.body).write()
  res.redirect('/users')
}