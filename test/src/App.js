import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Notes'
import noteService from './services/notes'

const App = (props) => {

  const [notes, setNotes] = useState ([])
  const [newNote, setNewNote] = useState ('')
  const [showAll, setShowAll] = useState (true)

  useEffect (() => {
    noteService
      .getAll ()    
      .then (initialNotes => {
        setNotes (initialNotes)
      })
  }, [])

  const toggleImportanceof = (id) => {
    const note = notes.find (n => n.id === id)
    const changeNote = {...note, important:!note.important}

    noteService
      .update (id, changeNote)
      .then (returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch (error => {
      alert (
        `the note ${note.content} was already deleted from the server`
      )
      setNotes (notes.filter (n => n.id !== id))
    })
    }

  const addNote = (event) => {
      event.preventDefault()
      console.log("button Clicked", event.target)

      const noteObject = {
        content : newNote,
        date : new Date().toISOString(),
        important : Math.random() < 0.5,
      }

      noteService
        .create (noteObject)
        .then (returnedNote => {
          setNotes(notes.concat (returnedNote))
          setNewNote ('')
        })

    }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote (event.target.value)
  }



  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map (note => 
            <Note 
              key={note.id}  
              note= {note}
              toggleImportance = {() => toggleImportanceof (note.id)} 
              />
          )}
      </ul>
      <ul>
        <form onSubmit={addNote}>
          <input 
            value={newNote}
            onChange={handleNoteChange}  
          />
          <button type="submit">save</button>
        </form>
      </ul>
    </div>
  )
}

export default App