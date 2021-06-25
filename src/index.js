import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './i18n'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  opts: {
    mode: 'no-cors',
  },
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <Suspense fallback="loading">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </ApolloProvider>,

  document.getElementById('root')
)
