const express = require('express')
const router = express.Router()
const routerShop = require('./shop')
const routerProfile = require('./profile')
const routerMenu = require('./menu')
const Controller = require('../contollers/controller')

router.get('/register', Controller.formRegister)
router.post('/register', Controller.handlerRegister)

router.get('/login',  Controller.loginForm)
router.post('/login', Controller.postLogin)

router.use(function(req, res, next){
    if(!req.session.userId) {
        const errorReqLogin = 'Please log in first'
        res.redirect(`/login?error=${errorReqLogin}`)
    }else{
        next()
    }
})

let customer = function(req, res, next) {
   if(req.session.role === 'Customer'){
    next()
   }else{
    res.redirect('/login')
   }
}

let staff = function(req, res, next) {
    if(req.session.role === 'Staff'){
     next()
    }else{
     res.redirect('/profile')
    }
 }

router.get('/logout', Controller.logout)

router.use('/shop', staff, routerShop)
router.use('/profile', staff, routerProfile)
router.use('/menu', customer, routerMenu)

module.exports = router