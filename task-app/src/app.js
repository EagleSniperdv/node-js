const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/user.js')
const Task = require('../models/task.js')

const app = express()

app.use(express.json())

//create instance in db
app.post('/users',async (req,res) => {
    try {
        const user =  await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/task',async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/users/login', async (req,res) => {
    try {

        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
        
    } catch (error) {
        res.status(400).send()
    }
})

app.get('/users',async (req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/users/:id', async (req,res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({message: "Page notFound"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/task', async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

app.get('/task/:id',async (req,res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        res.status(200).json(task)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/users/:id', async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/task/:id', async (req,res) => {
    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(id, req.body)

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/task/:id', async (req,res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)

        if(!task) {
            res.status(404).json({message: "not found"})
        }

        res.status(200).json({message: "task deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/users/:id', async (req,res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)

        if(!user) {
            res.status(404).json({message: "not found"})
        }


        res.status(200).json("task deleted successfully")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})




mongoose.connect("mongodb+srv://nabothongwenyi40:7M9wTbZXcTxA2GvV@nodebackend.oitngul.mongodb.net/user-data?retryWrites=true&w=majority&appName=nodebackend")
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


// const { createHash } = require('crypto');

// function hash(input) {
//     return createHash('sha256').update(input).digest('base64');
// }


// const password = 'Mombasa@2000'
// const hashPassword = hash(password)

// console.log(password)
// console.log(hashPassword)


// const bcrypt = require('bcrypt')

// const myFunc = async () => {
//     const password = 'Mombasa@2000'
//     const bcryptPassword = await bcrypt.hash(password,8)

//     console.log(password)
//     console.log(bcryptPassword)
// }

// myFunc()