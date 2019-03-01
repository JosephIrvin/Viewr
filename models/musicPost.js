const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Music = new Schema({
    img: String,
    artist: String,
    title: String,
    genre: String,
    link: String,
})

module.exports = mongoose.model('Music', Music)