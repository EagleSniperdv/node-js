const socket = io()

socket.on('message',(message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = document.querySelector('input').value

    socket.emit('sendMessage',message)
})

// socket.on('countUpdated', (count) => {
//     console.log('client count updted',count)
// })

// document.querySelector('#increament').addEventListener('click',() => {
//     console.log('increased by 1')
//     socket.emit('increament')
// })