const request = require('postman-request') 

const url = 'http://api.weatherapi.com/v1/current.json?key=a6a849fcefea4397837113529242102&q=london&aqi=yes'

request({
    url: url
},
(error,response) => {
    // const data = JSON.parse(IncomingMessage)
    console.log(response)

    debugger
    // console.log(data.body.location)
})
