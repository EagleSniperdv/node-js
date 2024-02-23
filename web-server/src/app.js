const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public/index.html'))


const app = express()

const publicDir = path.join(__dirname, '../public')
const helpDir = path.join(__dirname,'../public/help.html')
const aboutDir = path.join(__dirname,'../public/about.html')

app.use(express.static(publicDir))



app.get('/weather',(req,res) => {
    res.send('weather page')
})

app.listen(3000,() => {
    console.log('server is up and running localhost://3000')
})