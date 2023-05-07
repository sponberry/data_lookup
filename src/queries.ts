import { gql } from '../src/__generated__/gql';

export const GET_CUSTOMERS = gql`
      query {
        allCustomers  {
          email,
          forename,
          surname,
          contact_number,
          postcode,
        }
      }
    `