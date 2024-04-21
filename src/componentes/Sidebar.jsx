import React from 'react'
import { Link } from 'react-router-dom'
import Perfil from './Perfil';
import { BsCart3, BsFillGearFill, BsFillGrid3X3GapFill, BsListCheck, BsShop, BsMenuButtonFill } from 'react-icons/bs';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <section>
           <Perfil/> 
        </section>

        <ul className='sidebar-menu'>

            <li className="sidebar-seccion">
              <Link className="sidebar-link" to="/">
                <BsShop className='icon_header'/> Inicio
              </Link>
            </li>

            <li className="sidebar-seccion">
              <Link className="sidebar-link"   to="/ventas">
                <BsCart3 className='icon_header'/> Ventas
              </Link>
            </li>

            <li className="sidebar-seccion">
              <Link className="sidebar-link" to="/perdidas">
                <BsMenuButtonFill className='icon_header'/> Perdidas
              </Link>
            </li>

            <li className="sidebar-seccion">
              <Link className="sidebar-link" to="/categorias">
                <BsFillGrid3X3GapFill className='icon_header'/> Categorias
              </Link>
            </li>

            <li className="sidebar-seccion">
              <Link className="sidebar-link"  to="/inventario">
                <BsListCheck className='icon_header'/> Inventario
              </Link>
            </li>

            <li className="sidebar-seccion">
              <Link  className="sidebar-link" to="/configuracion">
                <BsFillGearFill className='icon_header'/> Configuracion
              </Link>
            </li>
  
        </ul>

    </aside>
  )
}

export default Sidebar
