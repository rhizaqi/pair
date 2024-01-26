const express = require('express')
const Controller = require('../contollers/controller')
const router = express.Router()

router.get('/', Controller.shop)
router.get('/:shopId', Controller.shopOne)
router.get('/addMenu/:shopId', Controller.renderMenu)
router.post('/addMenu/:shopId', Controller.addMenu)

module.exports = router