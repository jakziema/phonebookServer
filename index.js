const express = require('express')
const app = express()

app.use(express.json())

let phonebook = [
    {
        name: "Arto Hellas",
        number: "334556442",
        id: 1
    },
    {
        name: "Jakub Ziemann",
        number: "7790955",
        id: 2
    },
    {
        name: "Yelena Arakelow",
        number: "334553555",
        id: 3
    },

]
//get all the persons in the phonebook
app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

//get person with id

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    } 

    
})

//get info about the server
app.get('/info', (request, response) => {
    const phonebookSize = phonebook.length
    const date = new Date()
    const infoString = `Phonebook has info for ${phonebookSize} people`

    response.send(infoString)
    
    
})

//delete person with id
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebook = phonebook.filter(person => person.id !== id)
    console.log(`${id} deleted sucessfully`)
    
    response.status(204).end()
})



const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})