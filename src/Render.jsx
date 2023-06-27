import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from './App'
import About from './Pages/About'
import Populares from './Pages/Populares'
import Login from './Pages/Login'
import Default from './Pages/Default'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

const Render = () => {
  return (
    <>
    <div className='container'>
      <div className='item c1'>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route path='/' element={<App/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='populares' element={<Populares/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={<Default/>}/>
        </Route>
      </Routes>
      </div>
      <div className='item c4'><Footer/></div>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Render