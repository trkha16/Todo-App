const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema(
    {
        name: {
            type: String,
        },
        member: [
            {
                type: Array,
            },
        ],
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        collection: 'team',
    }
);

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
