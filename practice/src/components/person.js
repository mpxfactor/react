import React from 'react'
import PersonService from '../service/personsService'

const Person = ({id, name, number}) => {
     
   const handleDeleteButton = (id) => {

        PersonService
            .remove (id)
    }

    return (
        <div>{name} : {number} <button onSubmit = {handleDeleteButton(id)}>delete</button></div>
    )
}

export default Person