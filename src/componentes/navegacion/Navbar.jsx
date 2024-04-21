import React from 'react'
import { Link} from 'react-router-dom'
import'./style-navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        
        <ul className='menu'>
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/ventas">Ventas</Link></li>
            <li><Link className="menu-link" to="/perdidas">Perdidas</Link></li>
            <li><Link className="menu-link" to="/inventario">Inventario</Link></li>
            <li><Link className="menu-link" to="/configuracion">Configuracion</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar
