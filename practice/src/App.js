import React, {useState, useEffect} from 'react'
import PersonForm from './components/personForm'
import PersonFilter from './components/personFilter'
import PersonContent from './components/personContent'
import axios from 'axios'

const App = () => {
  const [person, setPerson] = useState([])
  const [newPerson, setNewPerson] = useState ('')
  const [allPerson, setAllPerson] = useState ([])
  const [newNumber, setNewNumber] = useState ('')
  const [newFilter, setNewFilter] = useState ('')

  useEffect (() => {
    console.log ('effect')
    axios
      .get ("http://localhost:3001/persons")
      .then (response => {
        console.log ('promise fulfilled')
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
        id : person.length + 1,
      }
      setPerson(person.concat (personObject))
      setAllPerson(allPerson.concat(newPerson))
    }  
  }

  const handleNameChange = (event) => {
     setNewPerson (event.target.value) 
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