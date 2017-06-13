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
			name: req.body.name,
      score: req.body.score
		})
		.then(function(data) {
			res.status(201).send(data);
		})
		.catch(function(err) {
			console.log('err')
		})
	}
}