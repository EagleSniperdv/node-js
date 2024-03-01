const express = require('express')
const mongoose = require('mongoose')

const Task = require('../models/task.data.js')

const app = express()


app.post('/task',async (req,res) => {
    try {
        const task =  await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.connect("mongodb+srv://nabothongwenyi40:7M9wTbZXcTxA2GvV@nodebackend.oitngul.mongodb.net/task-app?retryWrites=true&w=majority&appName=nodebackend")
.then(() => {
    console.log("connection successful")
})
.catch((e) => {
    console.log("Connection failed.Retry...")
    console.log(e)
})

app.listen(3000,() => {
    console.log('Server running at port 3000')
})