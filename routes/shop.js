const express = require('express')
const Controller = require('../contollers/controller')
const router = express.Router()

router.get('/', Controller.shop)
router.get('/shop/:id', Controller.shop)


module.exports = router