import './App.css';
import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

function App() {
  useEffect(() => {
    const query = gql`
      query {
        allCustomers  {
          email,
          forename,
          surname,
          contact_number,
          postcode,
        }
      }
    `

    client.query({ query })
      .then((response) => {
        console.log(response.data)
      })
  }, [])

  return (
    <div className="App">
      <p>Initial app setup</p>
    </div>
  );
}

export default App;
