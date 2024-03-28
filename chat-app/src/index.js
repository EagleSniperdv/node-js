const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname,'../public')


app.use(express.static(publicDirectoryPath))

// let count = 0

io.on('connection',(socket) => {
    console.log('new websocket connected')

    socket.emit('message','Welcome chat-app')

    socket.on('sendMessage',(message) => {
        io.emit('message',message)
    })

    // socket.emit('countUpdated',count)

    // socket.on('increament',() => {
    //     count++
    //     // socket.emit('countUpdated',count)
    //     io.emit('countUpdated',count)
    // })
})



server.listen(3000,() => {
    console.log('Server is running at port 3000')
})