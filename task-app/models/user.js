const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
            unique:true,
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

        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]

    }
)

UserSchema.methods.generateAuthToken = async function () {

    const user = this

    const token = jwt.sign({id: user.id.toString()},'thisismynewcourse')

    user.tokens = user.tokens.concat({token})
    
    return token
}

UserSchema.statics.findByCredentials = async (email, password) => {

    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to Log-In')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to Log-in')
    }

    return user
}

UserSchema.pre('save', async function (next)  {
    const user = this 

    console.log('Just before saving')

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
}
)

const User = mongoose.model('user',UserSchema)

module.exports = User