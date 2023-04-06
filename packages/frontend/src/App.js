import logo from './logo.svg';
import './App.css';
import { gql, Client, Provider, cacheExchange, fetchExchange, useQuery} from 'urql';

// API エンドポイント
const API_URL = "https://api.studio.thegraph.com/query/44992/subgraph2/v0.0.1";
// query
const query = gql`
  query {
    transfers{
      id
      to
      transactionHash
      blockTimestamp
      __typename
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
        <p>transfer info : {JSON.stringify(data)}</p>
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
