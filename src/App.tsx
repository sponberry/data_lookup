import React, { useState } from "react";
import "./App.css";
import CustomerList from "./Customer List";
import ProductList from "./Product List";

function App() {
  const [page, setPage] = useState("/");
  if (page === "customers") {
    return (
      <div className='App'>
        <button onClick={() => setPage("/")}>Go back</button>
        <CustomerList />
      </div>
    );
  } else if (page === "products") {
    return (
      <div className='App'>
        <button onClick={() => setPage("/")}>Go back</button>
        <ProductList />
      </div>
    );
  } else {
    return (
      <div className='App'>
        <button onClick={() => setPage("customers")}>Customers</button>
        <button onClick={() => setPage("products")}>Products</button>
      </div>
    );
  }
}

export default App;
