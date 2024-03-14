const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth =async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,'thisismynewcourse')
        // console.log(token)
        console.log(decoded.id)
        const user = await User.findOne({
            id: decoded.id,
            // 'tokens.token':token
        })

        console.log(user)
        if(!user) {
            console.log("user not found ")
        }

        req.user = user
        

    } catch (error) {
        res.status(401).send({error: 'please authenticate'})
    }
    // console.log('auth middleware')

    next()
}

module.exports = auth