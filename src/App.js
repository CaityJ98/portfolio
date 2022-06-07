import './App.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'



// import Navbar from 'react-bootstrap/Navbar'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
// import NavBar from "./pages/navigation"
import SideBar from "./pages/sidebar"
function App() {
 

  return (
    
    
    <Router>
   <SideBar />
  <Route exact path='/'> 
  <Home />
  </Route>
  <Route path='/about'>
    <About />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  
 
  
      
    </Router>
 
    
  );
 
 
   
  

  }

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
export default App
