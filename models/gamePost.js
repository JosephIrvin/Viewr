const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Game = new Schema({
    img: String,
    title: String,
    desc: String,
    genre: String,
    link: String
})

module.exports = mongoose.model('Game', Game)