import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-dark fixed-top ">
  <div className="container">
  <Link className='navbar-brand' to={'/'}><img src={require("./images/logo.JPG")} style={{ borderRadius: '50%' }} alt="Logo" /></Link>
   
    <div className="collapse navbar-collapse show" id="navbarBasic">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
        <Link to={'/about'}><button className='btn1'>Sign in</button></Link>
        </li>
        
        <li className="nav-item">
        <Link to={'/contact'}><button className='btn2'>Sign up</button></Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
    {/* <nav className=''>
        <Link to={'/'}><img src={require("./images/logo.JPG")} style={{ borderRadius: '50%' }} alt="Logo" /></Link>
        <Link to={'/about'}><button>Sign in</button></Link>
        <Link to={'/contact'}><button>Sign up</button></Link>
        
    </nav> */}
    </>
  )
}

export default Navbar