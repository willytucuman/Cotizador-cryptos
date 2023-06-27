import React from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import Logo from '../assets/img/Logoshiba.png'
import '../assets/css/pages.css'
const Navbar = () => {
  return (
    <div>
      <header>
       <h1>
              <Link to="/"><img src={Logo} alt="Logo pagina" className='logo-img'/></Link>
            </h1>
    <nav className='nav-bar'>
        <div className='nav-bar__elements'>
          <ul>
            <li><NavLink className="nav-bar__elements" to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar__elements" to="/populares">Populares</NavLink></li>
            <li><NavLink className="nav-bar__elements" to="/login">Login</NavLink></li>
          </ul>
        </div>
    </nav>
    </header>
    <hr />
    <Outlet/>
    </div>
  )
}

export default Navbar;
