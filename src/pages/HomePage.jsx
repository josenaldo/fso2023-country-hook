import React, { useState, useEffect } from 'react'

import { useField } from '@/features/hooks'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

// const useField = (type) => {
//   const [value, setValue] = useState('')

//   const onChange = (event) => {
//     setValue(event.target.value)
//   }

//   return {
//     type,
//     value,
//     onChange,
//   }
// }

// eslint-disable-next-line no-unused-vars
const useCountry = (name) => {
  // eslint-disable-next-line no-unused-vars
  const [country, setCountry] = useState(null)

  useEffect(() => {})

  return country
}

const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (!country.found) {
    return <div>not found...</div>
  }

  return (
    <div>
      <h3>{country.data.name} </h3>
      <div>capital {country.data.capital} </div>
      <div>population {country.data.population}</div>
      <img
        src={country.data.flag}
        height="100"
        alt={`flag of ${country.data.name}`}
      />
    </div>
  )
}

const HomePage = () => {
  const nameInput = useField('text', 'name')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput.input} />
        <button type="submit">Find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default HomePage
