const express = require('express')
const morgan = require('morgan')
const cors = require ('cors')

const app = express()
app.use(express.json())
app.use (cors())
app.use(express.static('build'))

/*
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

let personArr = [

    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    { 
      "id": 5,
      "name": " Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons', (request, response) => {
  response.json (personArr)
})

app.get ('/info', (request, response) => {
  const entries = Math.max (...personArr.map (n => n.id))
  const date = new Date()

  //response.send ("<spam>Phonebook has info for </spam>" + entries +  "<spam> persons</spam></br>" + date)

  response.send (`<p>Phonebook has info of ${personArr.length} person </br> ${new Date()}`)
})

app.get ('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = personArr.find (person => person.id === id)

  if (person) {
    response.json (person)
  }
  else {
    response.status (404).end()
  }
})

app.delete ('/api/persons/delete/:id', (request, response) => {
  const id = Number (request.params.id)
  personArr = personArr.filter (person => person.id !== id)
  
  response.status (204).end ()
})

const generatedId = () => {
  const maxId = personArr.length > 0
    ? Math.max (...personArr.map (person => person.id))
    : 0

  return maxId + 1
}

app.post ('/api/persons', (request, response) => {
  const body = request.body


  if (!(body.name && body.number)) {
    return response.status (404).json ({
      error : 'content missing'
    })
  }
  else if (personArr.map (person => person.name).includes (body.name)) {
    return response.status (404).json ({
      error : 'name must be unique'
    })
  }

  const newPerson = {
    id : generatedId (), 
    name : body.name,
    number : body.number,
  }

  personArr = personArr.concat (newPerson)
  response.json (personArr)
})
*/

const errorHandler = (error, request, response, next) => {
  console.error (error.message)

  if (error.name === 'CastError'){
    return response.status (400).send ({error : 'malformed id'})
  } else if (error.name === 'ValidationError') {
    return response.status (400).send ({error : error.message})
  }

  next (error)
}

app.use (errorHandler)

require('dotenv').config()
const Person = require ('./models/person')

app.get('/api/persons', (request, response) => {
  Person.find ({}).then (person => {
    response.json (person)
  })
})

app.get ('/api/persons/:id', (request, response) => {
  Person.findById (request.params.id).then (person => {
    response.json (person)
  })
})

app.post ('/api/persons', (request, response, next) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const newPerson = new Person ({
      name : body.name,
      number : body.number
  })

  /*newPerson.save ().then (result => {
      console.log ('person saved')
  })*/

  newPerson 
    .save ()
    .then (personSaved => response.json (personSaved))
    .catch (error => next (error))
})

app.delete ('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete (request.params.id)
    .then (result => {
      response.status (204).end ()
    })
    .catch (error => next (error))
})

app.put ('/api/persons/:id', (request, response, next) => {
  const body = request.body

  
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})