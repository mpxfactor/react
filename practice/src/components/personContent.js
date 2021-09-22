import React from 'react'
import Person from './person'
import personsService from '../service/personsService'

const Content = ({person, newFilter}) => {
    const handleDeleteButton = () => {
        console.log ('delete pressed')
    }
    return (
        <div>
            {person.filter(string => string.name.toLowerCase ().includes(newFilter)).map(filteredPerson => (
            <Person key = {filteredPerson.id} name={filteredPerson.name} number={filteredPerson.number} handleDeleteButton={handleDeleteButton}/>
          ))}
        </div>
    )
}

export default Content