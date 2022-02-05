const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String
    },
    detail: {
        type: String
    }
}, {
    collection: 'todo'
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo