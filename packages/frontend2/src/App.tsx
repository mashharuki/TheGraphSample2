import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Client, Provider, cacheExchange, fetchExchange, useQuery } from 'urql';
import query from './graphql/query';

// API エンドポイント
const API_URL = "https://api.studio.thegraph.com/query/44992/subgraph3/v0.0.5";

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
          Edit <code>src/App.tsx</code> and save to reload.
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
        <p>tokenName:{data.tokenCreateds[0].name}</p>
        <p>tokenName:{data.tokenCreateds[0].symbol}</p>
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