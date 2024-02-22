const http = require('http')
const url = 'http://api.weatherapi.com/v1/current.json?key=a6a849fcefea4397837113529242102&q=london&aqi=yes'

const req = http.request(url,(res) => {

    let data = ''

    res.on('data', (chunk) => {

        data = data + chunk.toString()
    })
    
    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })

}) 

req.on('error',(e) => {
    console.log('error',e)
})

req.end()