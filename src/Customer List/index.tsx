import React from "react";
import CustomerItem from "./CustomerItem";
import { useGetCustomersQuery } from "../generated/graphql";

export default function CustomerList() {
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
    <div>
      <h1>Customer List</h1>
      <ul>
        {data.allCustomers.map((customer) => {
          return (
            <CustomerItem
              customer={customer}
              key={customer.email}
            />
          );
        })}
      </ul>
    </div>
  );
}
