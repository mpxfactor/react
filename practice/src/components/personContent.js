import React from 'react'
import Person from './person'

const Content = ({person, newFilter}) => {
    return (
        <div>
            {person.filter(string => string.name.toLowerCase ().includes(newFilter)).map(filteredPerson => (
            <Person key = {filteredPerson.id} name={filteredPerson.name} number={filteredPerson.number}/>
          ))}
        </div>
    )
}

export default Content