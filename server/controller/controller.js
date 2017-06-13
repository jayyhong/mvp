var Player = require('../../db/models/models')

module.exports = {
	getAllPlayers: function(req, res) {

		Player.findAll()
			.then(function(players) {
				console.log('success')
				res.status(200).send(players)
			})
			.catch(function(err) {
				console.log('err')
			})
	},

	addPlayer: function(req, res) {
		console.log(req.body)
		Player.create({
			name: req.body.name
		})
		.then(function(name) {
			res.status(201).send(name);
		})
		.catch(function(err) {
			console.log('err')
		})
	}
}