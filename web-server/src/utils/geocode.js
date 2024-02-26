const req =require('postman-request')


const geocode = (address,callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=a6a849fcefea4397837113529242102&q='+ encodeURIComponent(address) +'&aqi=yes'
    req({
        url:url,
        json:true
    },(e,res) => {
        if (e) {
            callback('not connected,try again',undefined)
        // } else if (res.body.player === 0){
        //     callback('not found', undefined)
        } else {
            callback(undefined,{
                name: res.body.location.name,
                longitude:res.body.location.lon,
                latitude:res.body.location.lat,
                localTime:res.body.location.localtime,
            })
        }
    })
}

module.exports = geocode