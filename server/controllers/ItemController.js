const { item } = require('../models');

class ItemController{
    static getItems(res, req){
        item.findAll()
            .then(items => {
                res.json(items)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static add(res, req){
        const {name, type, price, stock} = req.body;

        item.create({
            name, type, price, stock
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static delete(res, req){
        const id = +req.params.id;

        item.destroy({
            where: {
                id
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    
    static update(res, req){
        const id = +req.params.id;
        const {name, type, price, stock} = req.body;

        item.update({
            name, type, price, stock
        }, {
            where: {
                id
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
}

module.exports = ItemController;