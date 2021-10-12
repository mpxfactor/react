const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

  const password = process.argv[2]

  const url =
    `mongodb+srv://fullstack:${password}@cluster0.it9ho.mongodb.net/note-app?retryWrites=true&w=majority`
  
  mongoose.connect(url)
  
  const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
  })
  
  const Note = mongoose.model('Note', noteSchema)
  
  const note = new Note({
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  })

  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
  
  /*note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
  })*/
