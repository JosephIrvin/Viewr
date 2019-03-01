Music = require("../models/musicPost")

const musicController = {
    index: (req, res) => {
        Music.find({})
            .then((musics) => {
                res.send(musics)
            })
    },
    show: (req, res) => {
    Music.findById(req.params.musicId)
        .then((music) => {
            res.send(music)
        })
    },
    update: (req, res) => {
        Music.findByIdAndUpdate(req.params.musicId, req.body)
            .then((updatedMusic) => {
                updatedMusic.save()
                res.send(updatedMusic)
            })
    },
    delete: (req, res) => {
        Music.findByIdAndDelete(req.params.musicId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Music.create(req.body)
        .then((music) => {
            res.send(music)
        })
    },

}

module.exports = musicController