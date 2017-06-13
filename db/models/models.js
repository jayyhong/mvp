var Sequelize = require('sequelize')
var db = require('../configuration')

var Player = db.define('players', {
  name: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.STRING
  }
})

Player.sync({force:true})

module.exports = Player