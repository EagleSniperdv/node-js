// const req = require('postman-request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherapi.com/v1/current.json?key=a6a849fcefea4397837113529242102&q=london&aqi=yes'

// req({
//     url: url,
//     json: true
// },
// (e,res) => {
//     // const dataBuffer = response.body
//     // const data = JSON.parse(dataBuffer)
//     // console.log(data)
//     // console.log(data.location)
//     // console.log(data.location.region)
    
//     if (e) {
//         console.log('Unable to connect')
//     } else if(res.body.e) {
//         console.log('error 2');
//     }
    
//     else {
//         console.log(res.body.location.name)
//         console.log('London temp is currently ' + res.body.current.temp_c)
//         console.log('London temp is currently ' + res.body.current.temp_c + ' We are experiencing ' + res.body.current.condition.text)
//     }


// })


// const sportUrl = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal'

// req({
//     url: sportUrl,
//     json:true
// },(e,res) => {

//     if (e) {
//         console.log('Unable to connect')
//     // } else if(res.body.player === 0 ) {
//     //     console.log('Not Found')
//     } else {
//         const plyName = res.body.player[6].strPlayer
//         const ntTeam = res.body.player[6].strNationality
        
//         console.log(plyName + ' is from ' + ntTeam)
//     }

// })



geocode('Nairobi',(e,data) => {
    console.log('Error',e)
    console.log('Data',data)
}) 
// debugger