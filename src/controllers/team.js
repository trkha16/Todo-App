const mysqlDB = require('../database/mysqlConnection');

// Create team
const createTeam = async (req, res, next) => {
    try {
        const { userID } = req.params;
        const team = new Team(req.body);
        team.member.push(userID);
        await team.save();
        const user = await User.findById(userID);
        user.teams.push(team._id);
        await user.save();
        return res.status(200).json({ success: true });
    } catch (err) {
        res.json(err);
    }
};

// Get all teams of user
const getAllTeams = (req, res, next) => {
    const { userID } = req.params;

    User.findById(userID)
        .populate('teams')
        .then((data) => {
            res.json(data.teams);
        })
        .catch((err) => {
            res.json(err);
        });
};

// Get team by id
const getTeamByID = (req, res, next) => {
    const { userID, teamID } = req.params;

    Team.findById(teamID)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports = {
    createTeam,
    getAllTeams,
    getTeamByID,
};
