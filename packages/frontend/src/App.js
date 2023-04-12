import { Client, Provider, cacheExchange, fetchExchange, gql, useQuery } from 'urql';
import './App.css';
import logo from './logo.svg';

// API エンドポイント
const API_URL = "https://api.studio.thegraph.com/query/44992/subgraph3/v0.0.2";
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

// create client
const client = new Client({
  url: API_URL,
  exchanges: [cacheExchange, fetchExchange],
});


function App() {
  // execute query
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  console.log(`respose:${JSON.stringify(data)}`);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>respose: {JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

function Root() {
  return (
    <Provider value={client}>
      <App />
    </Provider>
  );
}

export default Root;
