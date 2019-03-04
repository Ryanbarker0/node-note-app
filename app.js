const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Set application version
yargs.version('1.1.0')

// add, remove, read, list

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('adding new note')
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

console.log(yargs.argv)
