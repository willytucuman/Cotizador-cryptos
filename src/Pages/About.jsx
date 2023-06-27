import React from 'react'
import tomi from "../img/tomi.jpeg"
import andres from "../img/andres.jpeg"
const About = () => {
  return (
   <>
     <div className="card">
      <div className="card-body1">
     
        <h5 className="card-title">Tomas williams</h5>
        <p className="card-text">Tengo 21 años, me intereso la programacion desde adolescente
        y siempre me intrigo mucho el tema de las cryptos. Estoy contento de poder haber realizado
        un proyecto basado en este gusto que siempre tuve.</p>
        <img width="200px" src={tomi} alt="" />
      </div>
        <div className='container-secondCard'>
        <div className="card-body2">
       
        <h5 className="card-title">Acerca de Andres</h5>
        <p className="card-text">Tengo 22 años, me intereso la programacion desde adolescente
        y siempre me intrigo mucho el tema de las cryptos. Estoy contento de poder haber realizado
        un proyecto basado en este gusto que siempre tuve.</p>
        <img src={andres} width="200px" height="350px" alt="" />
      </div>
        </div>
    </div>
   </>
  )
}

export default About
