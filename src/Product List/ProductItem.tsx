import React from "react";
import { Product } from "../types";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <li key={product.vin}>
      <p>
        Make & Model: {product.make} {product.model}
      </p>
      <p>Colour: {product.colour}</p>
      <p>Price: {product.price}</p>
    </li>
  );
}
