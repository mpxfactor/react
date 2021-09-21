import React from 'react'
import CountriesDetails from './countriesDetails'

const CountriesCountLessThan10 = ({filteredCountries, setCountries}) => {
  
    if (filteredCountries.length === 1) {
      return (
        <CountriesDetails country={filteredCountries[0]}/>
        
      )
    }
  
    return (
      <div>
        {filteredCountries.map (mapFilteredCountries => (
          <div>
            name : {mapFilteredCountries.name}
            <button onClick={() => setCountries ([mapFilteredCountries])} >show</button>
          </div>
        ))}
      </div>
    )
  
  }

export default CountriesCountLessThan10

