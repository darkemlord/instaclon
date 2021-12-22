import React,{ useState, useEffect } from 'react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client'
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import { getToken } from './utils/token'
import { AuthContext} from './context/AuthContext';


function App() {
  const [auth, setAuth ] = useState(undefined);
  const authData = {
    name: 'Emanuel'
  }

  useEffect(() => {
    const token = getToken();
    if(token === null) {
      setAuth(null)
    } else {
      setAuth(token)
    }
  }, []);
  return (
    <AuthContext value={authData}>
      < ApolloProvider client={client} >
        {!auth ? <Auth /> : <h1>Estas logueado</h1>}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </ApolloProvider>
    </AuthContext>
  );
}

export default App;
