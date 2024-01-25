const express = require('express')
const router = express.Router()
const routerShop = require('./shop')
const routerProfile = require('./profile')
const routerMenu = require('./menu')

router.use('/shop', routerShop)
router.use('/profile', routerProfile)
router.use('/menu', routerMenu)

module.exports = router