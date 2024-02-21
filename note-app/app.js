const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')



yargs.version('1.1.0')

//create yarg add command
yargs.command({
    command:'add',
    describe: 'add new note',
    builder: {

        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
        
    }
})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: ({
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    }),
    handler: (argv) => {
        notes.removeNotes(argv.title)
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








