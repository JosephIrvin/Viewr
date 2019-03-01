Movie = require("../models/moviePost")

const movieController = {
    index: (req, res) => {
        Movie.find({})
            .then((movies) => {
                res.send(movies)
            })
    },
    show: (req, res) => {
    Movie.findById(req.params.movieId)
        .then((movie) => {
            res.send(movie)
        })
    },
    update: (req, res) => {
        Movie.findByIdAndUpdate(req.params.movieId, req.body)
            .then((updatedMovie) => {
                updatedMovie.save()
                res.send(updatedMovie)
            })
    },
    delete: (req, res) => {
        Movie.findByIdAndDelete(req.params.movieId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Movie.create(req.body)
        .then((movie) => {
            res.send(movie)
        })
    },

}

module.exports = movieController