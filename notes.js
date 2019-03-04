const fs = require('fs')

const getNotes = () => {
    return 'Getting Notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
    } else {
        console.log('Note title taken')
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

const removeNote = title => {
    console.log(`Removing note: ${title}`)
}

module.exports = {
    getNotes,
    addNote,
    getAll,
    getNote,
    removeNote
}

