const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Movie = new Schema({
    img: String,
    title: String,
    genre: String,
    length: String,
    desc: String,
    link: String,
})

module.exports = mongoose.model('Movie', Movie)