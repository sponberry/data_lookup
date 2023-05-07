import React from "react";
import "./App.css";
import { useGetCustomersQuery } from "./generated/graphql";
import CustomerItem from "./Components/CustomerItem";

function App() {
  const { data, loading, error } = useGetCustomersQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p>An error occurred. Please refresh the page.</p>;
  }

  if (!data) {
    return <p>No data.</p>;
  }

  return (
    <div className='App'>
      <h1>Customer List</h1>
      {data.allPersons.map((person) => {
        return (
          <CustomerItem
            customer={person}
            key={person.email}
          />
        );
      })}
    </div>
  );
}

export default App;
