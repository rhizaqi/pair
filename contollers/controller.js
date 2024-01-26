const rupiah = require("../helpers/helper")
const {Shop, Profile, Menu} = require("../models")
const bcrypt = require('bcryptjs')

class Controller {    

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

            const {username, password} = req.body

            let data = await Profile.findOne({
                where : {
                    username : username
                }
            })
            // console.log(data);
            if (data) {
                let isTrue = await bcrypt.compare( password, data.password)
                if (isTrue) {

                    req.session.userId = data.id
                    req.session.name = data.username
                    req.session.role = data.role

                    if(req.session.role === 'Staff'){
                        res.redirect('/shop')
                    }else{
                    res.redirect('/menu')

                    }
                } else {
                    let newErr = "Your username/password is not correct"
                    res.redirect(`/login?error=${newErr}`)
                }
            }else{
                let newErr = "Your username/password is not correct"
                res.redirect(`/login?error=${newErr}`) 
            }

        } catch (error) {
            
            throw error
        }
    }

    static async shop(req, res){
        try {
            let data = await Shop.findAll()
            // console.log(data);
            res.render('shop', {data})
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
            // console.log(data);
            res.render('menu', {data, rupiah})
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

    static async logout(req, res){
        try {
            req.session.destroy((error)=>{
                if(error){
                    res.send(error)
                }else{
                    res.redirect('login')
                }
            })
        } catch (error) {
            throw error
        }
    }

    static async renderMenu(req, res){
        try {
            const {shopId} = req.params

            let shop = await Shop.findByPk(shopId)

            res.render('addMenu', {shop})
            
        } catch (error) {
            throw error
        }
    }
  
    static async addMenu(req, res){
        try {

            const{name, type, price, location, imageURL} = req.body

            await Menu.create({name, type, price, shopId:location, imageURL})

            res.redirect(`/shop/${location}`)
        } catch (error) {
            throw error
        }
    }
    
    static async renderEdit(req, res){
        try {
            const {shopId, menuId} = req.params
            
        } catch (error) {
            throw error
        }
    }

    static async shopOne(req, res){
        try {
           const {shopId} = req.params

           let shop = await Shop.findByPk(shopId)
           let menu = await Menu.findAll()

           res.render('shopdetail', {shop, menu, rupiah})
        } catch (error) {
            throw error
        }
    }
    
    static async renderEdit(req, res){
        try {
            const {menuId} = req.params

            let menu = await Menu.findOne({
                where : {
                    id : menuId
                }
            })
            
            res.render('editMenu', {menu})
        } catch (error) {
            throw error
        }
    }
        
    static async handlerEdit(req, res){
        try {
            const {menuId} = req.params

            const{name, type, price, location, imageURL} = req.body

            await Menu.update({name, type, price, shopId:location, imageURL},{
                where :{
                    id : menuId
                }
            })

            res.redirect(`/shop/${location}`)

        } catch (error) {
            throw error
        }
    }

    static async deleteMenu(req, res){
        try {
            const {shopId, menuId} = req.params

            await Menu.destroy({
                where : {
                    id:menuId
                }
            })
            
            res.redirect(`/shop/${shopId}`)
        } catch (error) {
            throw error
        }
    }


}

module.exports = Controller