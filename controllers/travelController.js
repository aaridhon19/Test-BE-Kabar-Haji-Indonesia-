const { Travel } = require('../models')

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
}

module.exports = TravelController;