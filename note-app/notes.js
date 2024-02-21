const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes'
}

const addNotes  = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) =>  note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else {
        console.log(chalk.red.inverse('duplicate found'))
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON =  dataBuffer.toString()
    
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNotes = (title) => {
    const notes =loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > notesToKeep) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    listNotes: listNotes,
    removeNotes: removeNotes,
    getNotes: getNotes,
    addNotes: addNotes
}