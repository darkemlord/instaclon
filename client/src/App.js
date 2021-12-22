import React,{ useState, useEffect, useMemo } from 'react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client'
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import { getToken } from './utils/token'
import { AuthContext} from './context/AuthContext';
import Home from './pages/Home/index';

function App() {
  const [auth, setAuth ] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    if(token === null) {
      setAuth(null)
    } else {
      setAuth(token)
    }
  }, []);

  const logout = () => {
    console.log('log out')
  }

  const setUser = (user) => {
    setAuth(user)
  }

  const authData = useMemo(() => ({
    auth,
    logout,
    setUser,
  }), [auth])

  return (
    <AuthContext.Provider value={authData}>
      < ApolloProvider client={client} >
        {!auth ? <Auth /> : <Home></Home>}
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
    </AuthContext.Provider>
  );
}

export default App;
