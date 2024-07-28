const { Travel } = require('../models')
const { Op } = require('sequelize')

class TravelController {
    static async getTravel(req, res, next) {
        try {
            const travels = await Travel.findAll()
            res.status(200).json(travels)
        } catch (error) {
            next(error)
        }
    }

    static async getTravelById(req, res, next) {
        try {
            const { id } = req.params
            const travel = await Travel.findByPk(id)
            if (!travel) throw { name: 'id_not_found' }
            res.status(200).json(travel)
        } catch (error) {
            next(error)
        }
    }

    static async getTravelFavorite(req, res, next) {
        try {
            const { minRate } = req.query;
            const rateThreshold = minRate ? parseFloat(minRate) : 4.7;
            console.log("Fetching travels with rate greater than:", rateThreshold);
            const travels = await Travel.findAll({
                where: {
                    rate: {
                        [Op.gt]: rateThreshold
                    }
                }
            });
            res.status(200).json(travels);
        } catch (error) {
            console.error("Error fetching favorite travels:", error);
            next(error);
        }
    }
}

module.exports = TravelController;