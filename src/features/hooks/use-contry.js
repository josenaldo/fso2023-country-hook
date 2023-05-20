import { useEffect, useState } from 'react'
import axios from 'axios'

const env = import.meta.env.VITE_APP_ENV
const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api/name'
const CORS_URL = 'http://localhost:8080'

const baseUrl = env === 'development' ? `${CORS_URL}/${API_URL}` : `${API_URL}`

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchCountry = async () => {
      if (!name) {
        setCountry(null)
        return
      }

      try {
        const response = await axios.get(`${baseUrl}/${name}?fullText=true`)
        const country = response.data

        if (country) {
          setCountry({ found: true, data: country })
        } else {
          setCountry({ found: false })
        }
      } catch (error) {
        setCountry({ found: false })
      }
    }
    fetchCountry()
  }, [name])

  return country
}

export default useCountry
