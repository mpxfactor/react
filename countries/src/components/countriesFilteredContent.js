import React, {useState} from 'react'
import CountriesCountLessThan10 from './countriesLessThan'

const CountriesFilteredContent = ({countries}) => {

    if (countries.length > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
  
    else {
      return (
        <div>
          <CountriesCountLessThan10 filteredCountries={countries}/>
        </div>
        
      )
    }
  }

  export default CountriesFilteredContent