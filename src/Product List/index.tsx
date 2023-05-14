import React from "react";
import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "../generated/graphql";

export default function ProductList() {
  const { data, loading, error } = useGetProductsQuery();

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
    <div data-testid='product-document'>
      <h1>Product List</h1>
      <ul data-testid='product-list'>
        {data.allProducts.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.vin}
            />
          );
        })}
      </ul>
    </div>
  );
}
