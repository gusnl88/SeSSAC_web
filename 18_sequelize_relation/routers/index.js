const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/players", controller.getAllPlayer);

router.get("/players/:playerId", controller.getPlayer);

router.get("/teams", controller.getTeams);
router.get("/teams/:teamId/players", controller.getTeamPlayers);

router.get("/teams/:teamId", controller.getTeam);

router.post("/players", controller.postPlayer);

router.patch("/players/:playerId/team", controller.patchPlayer);

router.delete("/players/:playerId", controller.deletePlayer);

module.exports = router;
