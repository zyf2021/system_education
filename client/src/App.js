import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from './routes'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import {MainMenu} from './components/MainMenu'
import {Footer} from './components/Footer'




function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = true //!!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        
        { isAuthenticated && <MainMenu/> }
          <div className="container main">
            {routes}
          </div>
        { isAuthenticated && <Footer />}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
