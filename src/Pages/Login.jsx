import '../assets/css/login.css'
import Logo from '../assets/img/LogoShiba.png';
import React, { useEffect, useState } from 'react';

const RegistroUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsuarios = localStorage.getItem('usuarios');
    if (storedUsuarios) {
      setUsuarios(JSON.parse(storedUsuarios));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const agregarUsuario = () => {
    const nuevoUsuario = {
      nombre,
      email,
      contrasena,
    };
    setUsuarios([...usuarios, nuevoUsuario]);
    setNombre('');
    setEmail('');
    setContrasena('');
    alert("Usuario registrado")
  };

  const handleInicioSesion = () => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.contrasena === contrasena);
  
    if (usuarioEncontrado) {
        alert(`Bienveido ${nombre}`)
      setIsLoggedIn(true);
      window.location.href("/")
    } else {
      alert("Usuario y/o contraseña incorrecta.")
    }
  };

  if (isLoggedIn) {
    window.location.href("/dashboard")
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
  }


  return (
    <React.Fragment>
    <div className="wrapper fadeInDown">
        <div id="formContent">
            <div className="fadeIn first">
                <img src={Logo} width="80px" alt="User Icon" />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className="fadeIn second"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                <input
                type="email"
                className="fadeIn third"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                className="fadeIn fourth"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                />
                <input type="submit" className="fadeIn five" value="Iniciar sesión" onClick={handleInicioSesion}/>
                <input type="submit" className="fadeIn five" value="Registrar" onClick={agregarUsuario}/>
            </form>
        </div>
    </div>
    </React.Fragment>
  );
};

export default RegistroUsuarios;