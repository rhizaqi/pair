const {Shop, Profile} = require("../models")

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
            res.render('profile')
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
}

module.exports = Controller