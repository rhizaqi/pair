const express = require('express')
const Controller = require('../contollers/controller')
const router = express.Router()

router.get('/', Controller.profile)

module.exports = router
