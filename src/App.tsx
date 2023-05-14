import React, { useState } from "react";
import "./App.css";
import CustomerList from "./Customer List";
import ProductList from "./Product List";

function App() {
  const [page, setPage] = useState("/");
  if (page === "customers") {
    return (
      <div id='App'>
        <button onClick={() => setPage("/")}>Go back</button>
        <CustomerList />
      </div>
    );
  } else if (page === "products") {
    return (
      <div id='App'>
        <button onClick={() => setPage("/")}>Go back</button>
        <ProductList />
      </div>
    );
  } else {
    return (
      <div id='App'>
        <h1>Select data to request</h1>
        <button
          id='customerBtn'
          onClick={() => setPage("customers")}
        >
          Customers
        </button>
        <button
          id='productsBtn'
          onClick={() => setPage("products")}
        >
          Products
        </button>
      </div>
    );
  }
}

export default App;
