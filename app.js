const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const noteUtils = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command ({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command ({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.removeNote(argv.title)
    }
})

// Create read command
yargs.command ({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.readNote(argv.title)
    }
})

// create list command
yargs.command ({
    command: 'list',
    describe: 'list all notes',
    handler() {
        noteUtils.listNotes()
    }
})

yargs.parse()