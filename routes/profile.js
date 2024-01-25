const express = require('express')
const Controller = require('../contollers/controller')
const router = express.Router()

router.get('/', Controller.profile)
router.get('/add', Controller.renderAdd)
router.post('/add', Controller.handlerAdd)


module.exports = router