var Sequelize = require('sequelize')
var db = require('../config')

var Player = db.define('players', {
  name: {
    type: Sequelize.STRING
  },
  time: {
		type: Sequelize.INTEGER
  }
})

Player.sync()

module.exports = Player