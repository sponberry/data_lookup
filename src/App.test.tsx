import "@testing-library/jest-dom/extend-expect";
import { findByText, fireEvent, render, screen, waitFor } from "@testing-library/react";
// import CustomerList from "./Customer List";
import ProductList from "./Product List";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./createApolloClient";
import { act } from "react-dom/test-utils";

test("renders the landing page", () => {
  render(<App />);
  expect(screen.getByText("Select data to request")).toBeDefined;
});

test("clicking renders content on screen", () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");
  const customerButton = buttons.find((button) => {
    button.id === "customerBtn";
  });

  if (!customerButton) return;
  expect(customerButton).toBeDefined;
  fireEvent.click(customerButton);
  expect(screen.getByText("Customer List")).toBeDefined;
});

test("products data is returned", async () => {
  const client = createApolloClient();
  const { container, findByTestId, findByText } = render(
    <ApolloProvider client={client}>
      <ProductList />
    </ApolloProvider>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
        <p>
          Loading...
        </p>
    `);

  const productPage = await findByTestId("product-document");
  expect(productPage).toBeInTheDocument();

  const listTitle = await findByText("Product List");
  expect(listTitle).toBeInTheDocument();

  const productList = await findByTestId("product-list");
  expect(productList).toBeInTheDocument();
  expect(productList.firstChild).toMatchInlineSnapshot(`
    <li>
      <p>
        Make & Model: 
        Ford Fiesta
      </p>
      <p>
        Colour: 
        Red
      </p>
      <p>
        Price: 
        10000
      </p>
    </li>
    `);
});
