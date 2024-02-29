const express = require('express')
const mongoose = require('mongoose')
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionUrl = 'mongodb://127.0.0.1:27017'
// const databaseName = 'back-end'
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast =  require('./utils/forecast')

const Weather = require('../models/weather.time.js')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public/index.html'))


const app = express()

app.use(express.json())

const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

app.use(express.static(publicDir))

app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.get('',(req,res) => {
    res.render('index',{
        title: 'Time App',
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

    if (!req.query.address) {
        return res.send({
            error:"Address required"
        })
    }

    console.log(req.query.address)

    geocode(req.query.address, (e,{longitude,latitude,name} = {}) => {

        if (e){
            return res.send({e})
        }

        forecast(req.query.address, (e,forecastData) => {
            if (e) {
                return res.send(e)
            }

            res.send({
                forecast:forecastData,
                address:req.query.address
            })
        }) 

    })
    // res.send({
    //     forecast:'Its snowing',
    //     loctaion:'London',
    //     address: req.query.address
    // })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        message:'Help page Not found'
    })
})

// app.get('/products',(req,res) => {

//     if (!req.query.search) {
//         return res.send({
//             error:"you must provide search item"
//         })
//     }

//     console.log(req.query.search)
//     res.send({
//         products: []
//     })
// })

app.get('*',(req,res) => {
    res.render('404',{
        message:'Page Not found'
    })
})

app.post('/weather2',async (req,res) => {
    try {
        const weather = await Weather.create(req.body)
        res.status(200).json(weather)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})

    }
    // console.log(req.body)
    // res.send(req.body)
})


mongoose.connect("mongodb+srv://nabothongwenyi40:7M9wTbZXcTxA2GvV@nodebackend.oitngul.mongodb.net/first-collection?retryWrites=true&w=majority&appName=nodebackend")
.then(() => {
    console.log("connection successful")
})
.catch((e) => {
    console.log("Connection failed.Retry...")
    console.log(e)
})

app.listen(3000,() => {
    console.log('server is up and running localhost://3000')
})

// MongoClient.connect(connectionUrl,{useNewUrlParser: true})