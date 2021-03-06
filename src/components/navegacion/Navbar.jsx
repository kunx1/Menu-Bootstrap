import React from 'react'
import {Link} from 'react-router-dom'
import logo from './pokemonn.png'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'>
        <img src={logo} width="90" alt="hola" />     
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          <Link className="nav-link"  to='/Inicio'>Inicio</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to='/Pokemon'>Pokemon</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/items'>Items</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
