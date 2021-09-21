import React from 'react'

const CountriesDetails = ({country}) => {
    return (
      <div>
          <div><h1>{country.name}</h1></div>
          <div>capital : {country.capital}</div>
          <div>population : {country.population}</div>
          <h2>languages</h2>
          <ul>
            {country.languages.map (language => <li>{language.name}</li>)}
          </ul>
        </div>
    )
  
  }

  export default CountriesDetails