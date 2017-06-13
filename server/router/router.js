var router = require('express').Router()
var controller = require('../controller/controller')

router.route('/players')
    .get(controller.getAllPlayers)
    .post(controller.addPlayer)
    
module.exports = router