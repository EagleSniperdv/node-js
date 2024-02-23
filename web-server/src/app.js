const express = require('express')

const app = express()

app.get('',(req,res) => {
    res.send('<h1>Header</h1>')
})

app.get('/help',(req,res) => {
    res.send({
        name:'Naboth',
        age: 24
    })
})

app.get('/about',(req,res) => {
    res.send('about page')
})

app.get('/weather',(req,res) => {
    res.send('weather page')
})

app.listen(3000,() => {
    console.log('server is up and running localhost://3000')
})