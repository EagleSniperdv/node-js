const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Nairobi',(e,data) => {
    console.log('Error',e)
    console.log('Data',data)
    forecast(
        data.name,
        data.longitude,
        data.latitude,
        data.localTime,
            
        (e,data) => {
        console.log('Error', e)
        console.log('Data', data)
    })
}) 

