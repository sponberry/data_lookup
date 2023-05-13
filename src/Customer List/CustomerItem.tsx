import React from "react";
import { Customer } from "../types";

export default function CustomerItem({ customer }: { customer: Customer }) {
  return (
    <li key={customer.email}>
      <p>
        Name: {customer.forename} {customer.surname}
      </p>
      <p>Number: {customer.contact_number}</p>
      <p>Email: {customer.email}</p>
      <p>Postcode: {customer.postcode}</p>
    </li>
  );
}
