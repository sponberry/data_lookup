import React from "react";
import "./App.css";
import CustomerList from "./Customer List";
import ProductList from "./Product List";

import {
  BrowserRouter as Router,
  //Route, Link, Switch
} from "react-router-dom";

function App() {
  {
    /* <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id">
              <PatientViewPage />
            </Route>
            <Route path="/">
              <PatientListPage />
            </Route>
          </Switch>
        </Container>
      </Router> */
  }
  return (
    <div className='App'>
      <Router>
        <CustomerList />
        <ProductList />
      </Router>
    </div>
  );
}

export default App;
