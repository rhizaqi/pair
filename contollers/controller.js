const {Shop, Profile, Menu} = require("../models")
const bcrypt = require('bcryptjs')

class Controller {
    static async shop(req, res){
        try {
            let data = await Shop.findAll()
            // console.log(data);
            res.render('shop', {data})
        } catch (error) {
            throw error
        }
    }
    
    static async profile(req, res){
        try {
            let data = await Profile.findAll()
            // console.log(data);
            res.render('profile', {data})
        } catch (error) {
            throw error
        }
    }
    
    static async renderAdd(req, res){
        try {

            res.render('addProfile')
        } catch (error) {
            throw error
        }
    }
    
    static async handlerAdd(req, res){
        try {

            res.redirect('profile')
        } catch (error) {
            throw error
        }
    }

    static async detailShop(req, res){
        try {
            const {id} = req.params

            let data = await Shop.findByPk({
                where : {
                    id
                }
            })
            res.render('detailShop')
        } catch (error) {
            throw error
        }
    }

    static async menus(req, res){
        try {
            let data = await Menu.findAll()
            console.log(data);
            res.render('menu', {data})
        } catch (error) {
            throw error
        }
    }

    static async formRegister(req, res){
        try {
            res.render('register')
        } catch (error) {
            throw error
        }
    }

    static async handlerRegister(req, res){
        try {
        const {username, password, phone, email, role, imageURL} = req.body

        await Profile.create({username, password, phone, email, role, imageURL})

        res.redirect('login')
        } catch (error) {
            throw error
        }
    }

    static async loginForm(req, res){
        try {

            res.render('login')
        } catch (error) {
            throw error
        }
    }

    static async postLogin(req, res){
        try {
            // findOne / findByPk dari username
            // kalo ada, compare plain password ? = hash password db
            // plain !== hash , error
            // plain === hash, redirect
            const {username, password} = req.body

            let data = await Profile.findOne({
                where : {
                    username : username
                }
            })
            let isTrue
            
            if (username) {
                 isTrue = await bcrypt.compare( password, data.password)

            } 
            if (isTrue){

                return res.redirect('/menu')

            } else {

                const newErr = "Your username/password is not correct"
                return res.redirect(`/login?error=${newErr}`)
            }

        } catch (error) {
            
            throw error
        }
    }
}

module.exports = Controller