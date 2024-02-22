const express = require('express')

const app = express()

app.get('',(req,res) => {
    res.send('hello Express')
})

app.get('/help',(req,res) => {
    res.send('Help page')
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