const chalk = require('chalk')
const fs = require('fs')
const _= require('lodash')

const log = console.log

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        log(chalk.green.bold('New Note Added!'))
        saveNotes(notes)
    } else {
        log(chalk.red.bold('Note Title Taken!'))
    }  
}

const removeNote = title => {
    const notes = loadNotes()
    const notesCopy = [...notes]
    notesCopy.filter((note, index) => {
        if (note.title === title) {
            notesCopy.splice(index, 1)
            log(chalk.green.bold(`Successfully Removed Note!`))
            saveNotes(notesCopy)
        }
    })
    if (notes.length <= notesCopy.length) {
        log(chalk.red.bold('No Notes With That Title!'))
    }
}

const listNotes = () => {
    log('Listing Notes...')
    const notes = loadNotes()
    if (notes.length > 0) {
        log(chalk.blue.bold('Your Notes:'))
        notes.forEach(note => {
            log(`Title: ${note.title}`)
        })
    } else {
        log(chalk.red.bold('You Do Not Have Any Notes'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}

module.exports = {
    listNotes,
    addNote,
    getNote,
    removeNote
}

