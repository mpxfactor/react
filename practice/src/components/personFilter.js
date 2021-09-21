import React from 'react'

const Filter = ({person, handleFilterChange}) => {
    return (
        <div>
            filter shown with <input onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter