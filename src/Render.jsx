import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from './App'
import About from './Pages/About'
import Populares from './Pages/Populares'
import Login from './Pages/Login'
import Default from './Pages/Default'
import Layout from './Pages/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

const Render = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<App/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='populares' element={<Populares/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={<Default/>}/>
        </Route>
      </Routes>
      <footer className="footer">
      <div className="container">
        <span className="text-muted">Este es el contenido del footer.</span>
      </div>
    </footer>
    </div>
  )
}

export default Render
