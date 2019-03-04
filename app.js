const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes.js')

// Set application version
yargs.version('1.1.0')

// add, remove, read, list

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Contents of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a specific note',
    handler: function () {
        console.log('reading note')
    }
})

yargs.parse()
