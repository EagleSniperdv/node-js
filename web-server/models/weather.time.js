const mongoose = require('mongoose')

const WeatherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: false
        },
    }
    
    
)

const Weather = mongoose.model('Product', WeatherSchema)

module.exports = Weather;



