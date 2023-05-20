const appConfig = {
  application: {
    name: 'Country Hook',
    version: '0.0.1',
    description:
      'This project is a React application utilizing a custom hook named `useCountry` to search for specific country details from the service available at https://studies.cs.helsinki.fi/restcountries/. If the country is found, the application displays its details. If the country is not found, a corresponding message is shown instead. The `useCountry` hook relies on the API endpoint name to fetch the details of a country within a `useEffect` hook. The second parameter array plays a vital role in controlling the execution of the effect function. This exercise forms a part of the Fullstack Open course.',
  },
  footer: {
    createdBy: 'Josenaldo Matos',
    repository: 'https://github.com/josenaldo/vite-js-react-minimal',
    copyrigth: '2021',
  },
}

export default appConfig
