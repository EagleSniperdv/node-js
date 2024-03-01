const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: false
        },

        completed: {
            type: Boolean,
            required: false
        }
    }
)

const Task = mongoose.model('Task',TaskSchema)

module.exports = Task