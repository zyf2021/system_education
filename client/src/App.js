import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from './routes'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import {SectionNavbars} from './views/Components/Sections/SectionNavbars'
import Footer from './components/Footer/Footer'
//Routes

import "./assets/scss/material-kit-react.scss?v=1.10.0";
function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        
        { isAuthenticated && <SectionNavbars /> }
          <div className="container main">
            {routes}
          </div>
        { isAuthenticated && <Footer/> }
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
