import React from 'react';
import CardVentas from './CardVentas';
import './style-home.css'
import CardPerdidas from './CardPerdidas';
import CardInfoVivero from './CardInfoVivero';


export const ScHome = () => {
  return (
    <main className='container-home'>
      
      <div className='seccion-1'>
        <h1>Estadisticas</h1>
        <CardVentas/> 
        <CardPerdidas/>
 

      </div>

      <div className='seccion-2'>
        <h1>Datos del vivero</h1>
        <CardInfoVivero/> 
      </div>

      
      
      
    </main>
  )
}


