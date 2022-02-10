const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        roles: {
            type: Array,
            default: 'USER',
        },
        todos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Todo',
            },
        ],
        teams: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Team',
            },
        ],
    },
    {
        collection: 'user',
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
