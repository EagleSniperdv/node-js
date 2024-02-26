const req = require('postman-request')

const forecast = (address,callback) => {

    const url = 'http://api.weatherapi.com/v1/current.json?key=a6a849fcefea4397837113529242102&q=' + encodeURIComponent(address) +' &aqi=yes'

    req({
        url:url,
        json: true
    },(e,res) => {
        console.log(res.body)
        if(e) {
            callback('unable to connect',undefined)
        } else if(res.body.e) {
            callback('Try again',undefined)
        } else {
            callback(undefined,{
                title: res.body.location.name,
                longitude:res.body.location.lon,
                latitude:res.body.location.lat,
                localTime:res.body.location.localtime,
            })
        }
    })

}

module.exports = forecast