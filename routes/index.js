const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')
const movieController = require('../controllers/movieController')
const musicController = require('../controllers/musicController')


router.get('/games', gameController.index)
router.post('/games', gameController.create)
router.get('/games/:gameId', gameController.show)
router.patch('/games/:gameId', gameController.update)
router.delete('/games/:gameId', gameController.delete)

router.get('/movies', movieController.index)
router.post('/movies', movieController.create)
router.get('/movies/:movieId', movieController.show)
router.patch('/movies/:movieId', movieController.update)
router.delete('/movies/:movieId', movieController.delete)

router.get('/musics', musicController.index)
router.post('/musics', musicController.create)
router.get('/musics/:musicId', musicController.show)
router.patch('/musics/:musicId', musicController.update)
router.delete('/musics/:musicId', musicController.delete)

module.exports = router
