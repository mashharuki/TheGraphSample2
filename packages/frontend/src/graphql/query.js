import { gql } from 'urql';

// query
const query = gql`
  query {
    tokenCreateds{
      id
      name
      symbol
    }
    balanceChangeds{
      id
      to
      balanceOf
    }
  }
`;

export default query;