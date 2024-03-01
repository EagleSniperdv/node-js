const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            trim: true,

        },

        email: {
            type: String,
            required: false,
            trim: true,
            lowercase: true,
            // validate(value) {
            //     if (!validator.isEmail(value)) {
            //         throw new Error('Invalid Email')
            //     }
            // }

        },

        password: {
            type: String,
            required: false,
            minLength: 7,
            trim: true,
            // validate() {
            //     if (value.toLowerCase().includes('password')) {
            //         throw new Error('wrong password')
            //     }
            // }

        },

        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value<0) {
                    throw new Error('invalid age')
                }
            }
        },

    }
)

const User = mongoose.model('user',UserSchema)

module.exports = User