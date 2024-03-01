const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: false,
            lowercase: true
        },

        completed: {
            type: Boolean,
            required: false,
            default: false
        }
    }
)

const Task = mongoose.model('Task',taskSchema)

module.exports = Task