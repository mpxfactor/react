import React from 'react'

const Person = ({name, number, handleDeleteButton}) => <div>{name} : {number} <button onClick={handleDeleteButton}>delete</button></div>

export default Person