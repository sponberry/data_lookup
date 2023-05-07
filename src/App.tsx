import './App.css';
import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { GET_CUSTOMERS } from './queries';
import { useQuery } from '@apollo/client';
import { gql } from '../src/__generated__/gql';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

function App() {
  useEffect(() => {
    client.query({ GET_CUSTOMERS })
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
