import React from 'react';
import './style.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';




const App = () => {
    return (
      <>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route  path='/about' Component={About}/>
        <Route  path='/contact' Component={Contact}/>
        <Route  path='/footer' Component={Footer}/>
        
      </Routes>
      </BrowserRouter>
     
      
      </>
    );
  };

export default App;
