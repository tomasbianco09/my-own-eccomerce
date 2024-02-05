import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css";
import icon from "../../assets/img/logo.png"




const NavBar = () => {

    const [scrollingText, setScrollingText] = useState('ENVIOS GRATIS COMPRAS SUPERIORES A $65000 - 3 CUOTAS SIN INTERÉS');

  useEffect(() => {
    const interval = setInterval(() => {
      // Modifica el texto de desplazamiento aquí según tus necesidades
      // Por ejemplo, puedes recuperarlo de un array de mensajes
      // o cambiar dinámicamente basado en ciertos eventos.
      setScrollingText('ENVIOS GRATIS COMPRAS SUPERIORES A $65000 - 3 CUOTAS SIN INTERÉS ');
    }, 3000); // Cambia el tiempo según tus preferencias

    return () => clearInterval(interval);
  }, []);

    return (
        <>
            <header className='header'>
                
                <div className='header-container'>
                    <div className='upperNav'>
                        <div className="scrolling-text">{scrollingText}</div>
                    </div>
                    <div className='nav'>
                    
                        <ul className="nav-ul">
                            <li>
                                <Link to={"/"}
                                    className="nav-items"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                ><span>Hoodies</span></Link>
                            </li>
                            <li>
                                <Link to={"/about"}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                ><span>Productos</span></Link>
                            </li>

                            <img className="nav-img" src={icon} alt="" />

                            <li>
                                <Link to="drinks"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Nosotros</Link>
                            </li>
                            <li>
                                <Link to="us"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Ayuda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar