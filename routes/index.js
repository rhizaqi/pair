const express = require('express')
const router = express.Router()
const routerShop = require('./shop')
const routerProfile = require('./profile')

router.use('/shop', routerShop)
router.use('/profile', routerProfile)

module.exports = router