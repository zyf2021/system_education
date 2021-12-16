import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from './routes'
import Header from './components/Header/Header'
import SectionNavbars from './views/Components/Sections/SectionNavbars'
import Footer from './components/Footer/Footer'


import "./assets/scss/material-kit-react.scss?v=1.10.0";
function App() {
  const routes = useRoutes()
  return (
    <body>
      <Router>
        <SectionNavbars color="rose"/>
        <div className="container main">
          {routes}
        </div>
        
        <Footer/>
      </Router>
    </body>
  );
}

export default App;
