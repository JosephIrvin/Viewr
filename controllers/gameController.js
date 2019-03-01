Game = require("../models/gamePost")

const gameController = {
    index: (req, res) => {
        Game.find({})
            .then((games) => {
                res.send(games)
            })
    },
    show: (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.send(game)
        })
    },
    update: (req, res) => {
        Game.findByIdAndUpdate(req.params.gameId, req.body)
            .then((updatedgame) => {
                updatedgame.save()
                res.send(updatedgame)
            })
    },
    delete: (req, res) => {
        Game.findByIdAndDelete(req.params.gameId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Game.create(req.body)
        .then((game) => {
            res.send(game)
        })
    },

}

module.exports = gameController