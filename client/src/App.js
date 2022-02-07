import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from './routes'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'

//Routes


function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        
        { isAuthenticated }
          <div className="container main">
            {routes}
          </div>
        { isAuthenticated }
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
