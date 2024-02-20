// const addNumbers = require('./utilis.js');

// const sum = addNumbers(4,-2)

// console.log(sum);

// const chall1 = require('./chall1.js');

// const output = chall1('am new')

// console.log(output);

// const getNotes = require('./notes.js');

// const output = getNotes('Your Notes...')

// console.log(output)
// console.log(validator.isEmail('naboth@gmail.com'))

// import validator from 'validator';
// const validator = require('validator')

// console.log(validator.isURL('www.naboth.com'))

const chalk = require('chalk')
const yargs = require('yargs')


yargs.version('1.1.0')

//create yarg add command
yargs.command({
    command:'add',
    describe: 'add new note',
    handler: () => {console.log('adding new note')}
})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: () => {
        console.log('removing data')
    }
})

// Create read command

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: () => {
        console.log('Read notes')
    }
})

// Create list command

yargs.command({
    command: 'list',
    describe: 'list Notes',
    handler: () => {
        console.log('list notes')
    }
})
//add,remove,read,list



// console.log(process.argv)
console.log(yargs.argv)

// const command = process.argv[2]

// if (command === 'add') {
    
//     console.log('Adding Notes')
// } else if (command === 'Remove') {
//     console.log('Removing Note')
// }






