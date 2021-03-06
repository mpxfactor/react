import React, {useState, useEffect} from 'react'
import PersonForm from './components/personForm'
import PersonFilter from './components/personFilter'
import PersonContent from './components/personContent'
import PersonService from './service/personsService'
import axios from 'axios'

const App = () => {
  const [person, setPerson] = useState([])
  const [newPerson, setNewPerson] = useState ('')
  const [allPerson, setAllPerson] = useState ([])
  const [newNumber, setNewNumber] = useState ('')
  const [newFilter, setNewFilter] = useState ('')

  useEffect (() => {
    console.log ('effect')
    PersonService
      .getAll ()
      .then (response => {
        setPerson (response.data)
      })

  }, [])
  console.log ('person', person.length, 'rendered')


  const onSubmit = (event) => {
    event.preventDefault()
    if(allPerson.indexOf(newPerson) !== -1)  
    {  
       alert(`${newPerson} is already added to phonebook`)  
    }   
    else  
    {  
      const personObject = {
        name : newPerson,
        number : newNumber,
      }

      PersonService
        .create (personObject)
        .then (response => {
          setPerson (person.concat(response.data))
          setAllPerson (allPerson.concat(response.data.person))
          setNewPerson ('')

        })
    }  
  }

  const handleNameChange = (event) => {
     setNewPerson (event.target.value) 
     console.log (event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter person={person} handleFilterChange={handleFilterChange}/>
      <h2>add new</h2>
      <PersonForm onSubmit={onSubmit} name={person.name} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PersonContent person={person} newFilter={newFilter}/>
      
    </div>
  )


}

export default App