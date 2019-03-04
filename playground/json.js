// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj)

// console.log(stringObj)

// const personString = '{"name": "Ryan", "age": 25}'

// const parsedString = JSON.parse(personString)

// console.log(parsedString.name)

const fs = require('fs')

const originalNote = {
    title: 'some title',
    body: 'some body'
}

const originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

const noteString = fs.readFileSync('notes.json')

const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)