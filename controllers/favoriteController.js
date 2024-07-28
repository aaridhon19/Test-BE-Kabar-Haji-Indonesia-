const { Favorite } = require('../models')

class FavoriteController {
    static async getFavorite(req, res, next) {
        try {
            const fav = await Favorite.findAll()
            console.log(fav, "ini fav");
            res.status(200).json(fav)
        } catch (error) {
            next(error)
        }
    }

    static async getFavoriteById(req, res, next) {
        try {
            const { id } = req.params
            const fav = await Favorite.findByPk(id)
            if (!fav) throw { name: 'id_not_found' }
            res.status(200).json(fav)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = FavoriteController;