const mongoose = require ('mongoose')
const argvLength = process.argv.length

if (argvLength < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = 
    `mongodb+srv://fullstack:${password}@cluster0.it9ho.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Person = mongoose.model ('Person', personSchema)

if (argvLength === 3) {
    console.log ('phonebook:')
    Person.find ({}).then (result => {
        result.forEach (person => {    
            console.log (person.name, person.number)
        })
        mongoose.connection.close()
    })
}
else if (argvLength === 5) {
    const newName = process.argv[3]
    const newNumber = process.argv[4]

    const newPerson = new Person ({
        name : newName,
        number : newNumber
    })

    newPerson.save ().then (result => {
        console.log ('person saved')
        mongoose.connection.close()
    })
}
else {
    console.log ('please enter all arguments')
    process.exit(1)
}


