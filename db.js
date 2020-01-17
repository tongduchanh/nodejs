const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: []}).write()

// var pgp = require('pg-promise')
// var db = pgp('postgres://admin:A12345678@host:8.140.70.9/beta')

module.exports = db