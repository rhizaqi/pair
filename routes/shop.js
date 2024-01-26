const express = require('express')
const Controller = require('../contollers/controller')
const router = express.Router()

router.get('/', Controller.shop)
router.get('/:shopId', Controller.shopOne)
router.get('/addMenu/:shopId', Controller.renderMenu)
router.post('/addMenu/:shopId', Controller.addMenu)
router.get('/editMenu/:shopId/menu/:menuId', Controller.renderEdit)
router.post('/editMenu/:shopId/menu/:menuId', Controller.handlerEdit)
router.get('/:shopId/delete/:menuId', Controller.deleteMenu)


module.exports = router