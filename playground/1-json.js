const fs = require('fs')

// const book ={
//     title: 'Ego is the enemy',
//     author: 'Ryan Reynolds'
// }

// const bookJson = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJson)

// console.log(bookJson)

// const bookParsed = JSON.parse(bookJson)

// console.log(bookParsed)

const dataBuffer = fs.readFileSync('1-json.json')

const dataJson = dataBuffer.toString()

const data = JSON.parse(dataJson)

console.log(data)