var Sequelize = require('sequelize')
var config = require('../config')

var db = new Sequelize(config.dbURL)

db.authenticate()
  .then(function() {
    console.log('connected to database')
  })
  .catch(function() {
    console.log('error')
  })

module.exports = db