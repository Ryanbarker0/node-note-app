const chalk = require('chalk')
const fs = require('fs')
const _= require('lodash')

const getNotes = () => {
    return 'Getting Notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        console.log(chalk.green.bold('New Note Added!'))
        saveNotes(notes)
    } else {
        console.log(chalk.red.bold('Note Title Taken!'))
    }
    
}

const removeNote = title => {
    const notes = loadNotes()
    const notesCopy = [...notes]
    notesCopy.filter((note, index) => {
        if (note.title === title) {
            notesCopy.splice(index, 1)
            console.log(chalk.green.bold(`Successfully Removed Note!`))
            saveNotes(notesCopy)
        }
    })
    if (notes.length <= notesCopy.length) {
        console.log(chalk.red.bold('No Notes With That Title!'))
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

const getAll = () => {
    console.log('Getting all notes.')
}

const getNote = title => {
    console.log(`Reading note: ${title}`)
}



module.exports = {
    getNotes,
    addNote,
    getAll,
    getNote,
    removeNote
}

