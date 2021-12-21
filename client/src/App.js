import React,{ useState } from 'react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client'
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';


function App() {
  const [auth, setAuth ] = useState(undefined);
  return (
    < ApolloProvider client={client} >
      {!auth ? <Auth /> : <h1>Estas logueado</h1>}
      <ToastContainer

      />
    </ApolloProvider>
  );
}

export default App;
