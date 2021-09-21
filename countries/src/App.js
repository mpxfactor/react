import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountriesFilteredContent from './components/countriesFilteredContent'

const App = () => {

  const [allCountries, setAllCountries] = useState ([])
  const [newFilter, setNewFilter] = useState ('')
  const [countries, setCountries] = useState ([])

  useEffect (() => {
    console.log ("effect")
    axios
      .get ("https://restcountries.eu/rest/v2/all")
      .then (response => {
        console.log ("promise received")
        setAllCountries (response.data)
      })

  }, [])

  const handleFilterChange = (event) => {
    setNewFilter (event.target.value)
    const filteredCountriesArray = allCountries.filter (string => string.name.toLowerCase ().includes (newFilter))
    setCountries (filteredCountriesArray)
  }



  return (
    <div>
      <div>find countries <input onChange={handleFilterChange}/></div>
      <CountriesFilteredContent countries={countries} setCountries={setCountries}  />
    </div>
    
  )
}

export default App