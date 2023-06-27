import React from 'react'
import '../assets/css/index.css'
import logogh from'../assets/img/github.svg'
export const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/AndresBulacia" target='_blank'>
        <img src={logogh} alt="logo github" className='logogh' />
      </a>
        <span className="text-footer">&copy;  CryptoWeB. Todos los derechos reservados.</span>
    </footer>
  )
}

export default Footer;