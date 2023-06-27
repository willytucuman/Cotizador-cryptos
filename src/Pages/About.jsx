import React from 'react'
import tomi from "../assets/img/tomi.jpg"
import andres from "../assets/img/andres.jpg"
import '../assets/css/about.css'
import logogh from '../assets/img/github.png'
import logoig from '../assets/img/instagram.png'
export const About = () => {
  return (
	 <div class="row">
	    <div class="col-md-4">
    		<div class="card mb">
              <img class="card-img-top" src={andres} alt="Card image cap"/>
              <div class="card-body mb">
                <h5 class="card-title">Andrés Bulacia</h5>
                <p class="card-text">Tengo 22 años, me intereso la programacion desde adolescente
      y siempre me intrigo mucho el tema de las cryptos. Estoy contento de poder haber realizado
      un proyecto basado een este gusto que siempre tuve.</p>
              </div>
              <div className='container-logos'>
              <a href="https://github.com/AndresBulacia" target='_blank'>
                  <img src={logogh} alt="" className='logos-card'/>
                </a>
                <a href="https://www.instagram.com/andresbulacia/" target='_blank'>
                  <img src={logoig} alt="" className='logos-card' width="10px"/>
                </a>
                </div>
            </div>
            <br />
        </div>

        <div class="col-md-4">
    		
        </div>

        <div class="col-md-4">
    		<div class="card mb">
              <img class="card-img-top" src={tomi} alt="Card image cap"/>
              <div class="card-body mb">
                <h5 class="card-title">Tomas williams</h5>
                <p class="card-text">Tengo 21 años, me intereso la programacion desde adolescente
                     y siempre me intrigo mucho el tema de las cryptos. Estoy contento de poder haber realizado
                     un proyecto basado en este gusto que siempre tuve.</p>
              </div>
              <div className='container-logos'>
              <a href="https://github.com/willytucuman" target='_blank'>
                  <img src={logogh} alt="" className='logos-card'/>
                </a>
                <a href="https://www.instagram.com/tomi_williams01/" target='_blank'>
                  <img src={logoig} alt="" className='logos-card'/>
                </a>
                </div>
            </div>
        </div>
	  </div>
  )
}

export default About
 
{/* <>
   
   <div classNameNameName="card">
    <div classNameNameName="card-body1">
   
      <h5 classNameNameName="card-title"></h5>
      <p classNameNameName="card-text"></p>
      <img width="200px" src={tomi} alt="" />
    </div>
      <div classNameNameName='container-secondCard'>
      <div classNameNameName="card-body2">
     
      <h5 classNameNameName="card-title">Acerca de </h5>
      <p classNameNameName="card-text"></p>
      <img src={andres} width="200px" height="350px" alt="" />
    </div>
      </div>
  </div>
 </> */}