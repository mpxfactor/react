import React from 'react'

const PersonForm = ({onSubmit, name, handleNameChange, number, handleNumberChange}) => {
    return(
      <div>
        <form onSubmit={onSubmit}>
          <div> name: <input value={name}onChange={handleNameChange}/> </div>
          <div> number: <input value={name} onChange={handleNumberChange}/> </div>
          <div> <button type="submit">add</button></div>
        </form>
      </div>

    )
}

export default PersonForm