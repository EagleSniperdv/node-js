const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public/index.html'))


const app = express()

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.set('view engine','hbs')

app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Naboth Nyagoko'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title:'Web-Servers',
        name: 'naboth Nyagoko'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help page',
        name: 'Naboth Ongwenyi'
    })
})


app.get('/weather',(req,res) => {
    res.send('weather page')
})

app.listen(3000,() => {
    console.log('server is up and running localhost://3000')
})