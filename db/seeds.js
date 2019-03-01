const Game = require('../models/gamePost')
const Music = require('../models/musicPost')
const Movie = require('../models/moviePost')
const mongoose = require('mongoose')


const movie1 = new Movie({
    img: 'https://m.media-amazon.com/images/M/MV5BNjIzNTcwMDc3Nl5BMl5BanBnXkFtZTgwNzU5NTY5NzE@._V1_.jpg',
    title: 'Hardcore Henry',
    genre: 'Action',
    length: '2 Hours',
    desc: 'This first person movie will make you question reality',
    link: 'https://www.imdb.com/title/tt3072482/',
})

const movie2 = new Movie({
    img: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg',
    title: 'Gone Girl',
    genre: 'Drame',
    length: '1/2 Hours',
    desc: 'Who is guilty in this psychological drama',
    link: 'https://www.imdb.com/title/tt2267998/',
})

const game1 = new Game({
    img: 'https://www.mobygames.com/images/covers/l/538006-apex-legends-xbox-one-front-cover.jpg',
    title: 'Apex Legends',
    desc: 'A tactical game where there is one question will you become a legend?',
    genre: 'Battle Royale',
    link: 'https://www.ea.com/games/apex-legends'
})

const game2 = new Game({
    img: 'http://www.finalfantasy.net/wp-content/uploads/2013/05/5a7af44ab3cc8bed9815bfd35e736697.jpg',
    title: 'Final Fantasy XIV',
    desc: 'Become the defenders of Eorzea',
    genre: 'MMORPG',
    link: 'https://na.finalfantasyxiv.com/product/'
})

const music1 = new Music({
    img: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fe2e8868068158abd39ac4639d635f601.960x960x1.jpg',
    artist: 'The Marias',
    title: 'Superclean',
    genre: 'Indie Pop',
    link: 'https://www.youtube.com/watch?v=vssN4faWrIY',
})
const music2 = new Music({
    img: 'https://f4.bcbits.com/img/a1853711793_10.jpg',
    artist: 'Jack Stauber',
    title: 'Buttercup',
    genre: 'Indie Rock',
    link: 'https://www.youtube.com/watch?v=eYDI8b5Nn5s',
})


Game.deleteMany({})
.then(()=> Music.deleteMany({}))
.then(()=> Movie.deleteMany({}))
.then(()=> movie1.save())
.then(()=> movie2.save())
.then(()=> music1.save())
.then(()=> music2.save())
.then(()=> movie1.save())
.then(()=> movie2.save())
.then(()=> console.log("Database Seeded" + game1 + movie2 + music2))
.then(()=> mongoose.connection.close())