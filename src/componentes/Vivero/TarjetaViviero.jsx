import React from 'react'
import './style-vivero.css'
import { getViveros } from '../../peticiones/getVivero';




const TarjetaViviero = () => {

  

  return (
    <div className='tg-vivero'>
        <h4 className='tg-vivero' >nombre del lugar: vivero Huevos</h4>
        <p className='tg-vivero' >Direccion</p>
        <button>Ver mas</button>
    </div>
  )
};

export default TarjetaViviero
