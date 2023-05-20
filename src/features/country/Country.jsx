const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (!country.found) {
    return <article>Not found...</article>
  }

  const officialName = country.data.name.official
  const commonName = country.data.name.common

  return (
    <article>
      <div className="grid">
        <div>
          <h3>{officialName}</h3>
          <ul>
            <li>Name: {commonName}</li>
            <li>Capital: {country.data.capital} </li>
            <li>Population: {country.data.population}</li>
          </ul>
        </div>
        <img
          src={country.data.flags.png}
          height="100"
          alt={`flag of ${country.data.name}`}
        />
      </div>
    </article>
  )
}

export default Country
