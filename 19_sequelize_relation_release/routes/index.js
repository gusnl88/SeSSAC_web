const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
// player get
router.get("/",controller.main)
router.get("/players",controller.players)
router.get('/players/:playerId',controller.player)
// teams get
router.get('/teams',controller.teams)
router.get('/teams/:teamid',controller.team)
router.get('/teams/:teamId/players',controller.teamPlayers)

// player post
router.post('/players',controller.playerSignup)
router.patch('/players/:playerId/team',controller.playerTeamModify)

router.delete('/players/:playerId',controller.playerDelete)
module.exports = router;