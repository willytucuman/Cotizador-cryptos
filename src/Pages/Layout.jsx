import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
    <nav>
        <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/">App</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/about">About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/populares">Populares</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/login">Login</NavLink></li>
        
    </nav>
    <hr />
    <Outlet/>
    </div>
  )
}

export default Layout
