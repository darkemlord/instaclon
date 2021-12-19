import React from 'react';
import { Button } from 'semantic-ui-react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client'


function App() {
  return (
    < ApolloProvider client={client} >
      <div className="container">
        <h1>hello bootstrap</h1>
        <Button primary >Hello World</Button>
      </div>
    </ApolloProvider>
  );
}

export default App;
