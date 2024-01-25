const express = require('express')
const Controller = require('../contollers/controller')
const router = express.Router()

router.get('/', Controller.profile)
router.get('/add', Controller.renderAdd)
router.post('/add', Controller.handlerAdd)
router.get('/register', Controller.formRegister)
router.post('/register', Controller.handlerRegister)
router.get('/login', Controller.loginForm)
router.post('/login', Controller.postLogin)

module.exports = router
