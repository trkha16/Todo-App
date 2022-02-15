const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/team');

router
    .route('/:userID/team')
    .get(TeamController.getAllTeams)
    .post(TeamController.createTeam);
router.route('/:userID/team/:teamID').get(TeamController.getTeamByID);

module.exports = router;
