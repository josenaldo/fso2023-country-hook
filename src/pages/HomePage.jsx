import React, { useEffect, useState } from 'react'

import { useField, useCountry } from '@/features/hooks'
import { Country } from '@/features/country'

const HomePage = () => {
  const nameInput = useField('text', 'nameInput')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setLoading(true)

    if (!nameInput.value || nameInput.value === name) {
      setLoading(false)
    }

    setName(nameInput.value)
  }

  useEffect(() => {
    if (country) {
      setLoading(false)
    }

    if (!country) {
      setLoading(false)
    }

    if (!country?.found) {
      setLoading(false)
    }
  }, [country])

  return (
    <div>
      <article>
        <form onSubmit={fetch}>
          <label htmlFor={nameInput.name}>Find country: </label>
          <input {...nameInput.input} />
          <button type="submit" aria-busy={loading}>
            Find
          </button>
        </form>
      </article>

      <Country country={country} />
    </div>
  )
}

export default HomePage
