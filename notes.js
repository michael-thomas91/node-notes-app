const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {

    const notes = loadNotes()
    const duplicates = notes.filter((note) => note.title === title)
    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('new note added!'))
    }
    else {
        console.log(chalk.bgRed('a note by that name already exists!'))
    }
}
debugger
const removeNote = (title) => {
    const notes = loadNotes()
    notes.forEach( (note, index) => {
        if (note.title === title) {
            notes.splice(index, 1)
            console.log(`note titled '${note.title}' deleted!`)
        }
    })
    saveNotes(notes)
}

const readNote = function (title) {
    const notes = loadNotes()
    const targetNote = notes.find((note) => note.title === title)
        if (targetNote) {
        console.log(chalk.inverse (targetNote.title))
        console.log(targetNote.body)
        } else {
            console.log(chalk.red('error, no note found'))
        }
}

const listNotes = ()  => {
    const notes = loadNotes()
    notes.forEach( (note) => console.log(`${note.title} : ${note.body}`))
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}
