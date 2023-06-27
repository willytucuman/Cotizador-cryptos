import React from 'react'
import '../assets/css/populares.css'
import bitcoinLogo from '../assets/img/bitcoin.webp'
import ethereumLogo from '../assets/img/ethereum.webp'
import tetherLogo from '../assets/img/Tetherlogo.png'

export const Populares = () => {
  return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb">
                    <img className="card-img-top" src={bitcoinLogo} alt="Card image cap"/>
                    <div className="card-body mb">
                        <h5 className="card-title">BITCOIN</h5>
                        <p className="card-text">Bitcoin​ es una moneda digital descentralizada y un sistema de pago​​ sin banco central o administrador único.</p>
                        <a href="https://bitcoin.org/es/" target='_blank'><button type="button" className="btn btn-primary mb">Leer más</button></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb">
                    <img className="card-img-top" src={ethereumLogo} alt="Card image cap"/>
                    <div className="card-body mb">
                        <p className="card-text">Tecnología de gestión comunitaria que impulsa la criptomoneda ether y miles de aplicaciones descentralizadas.</p>
                        <a href="https://ethereum.org/es/" target='_blank'><button type="button" className="btn btn-primary mb">Leer más</button></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb">
                    <img className="card-img-top" src={tetherLogo} alt="Card image cap"/>
                    <div className="card-body mb">
                        <h5 className="card-title">TETHER</h5>
                        <p className="card-text">Los tokens Tether están vinculados a las monedas del mundo real en una base de 1 a 1.</p>
                        <a href="https://tether.to/es/how-it-works" target='_blank'><button type="button" className="btn btn-primary mb">Leer más</button></a>
                    </div>
                    </div>
                </div>
            </div>
        
        
     
  );
}
export default Populares;