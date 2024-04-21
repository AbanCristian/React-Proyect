
import React from 'react'
import ListProductos from '../ListProductos'
import './style-inventario.css'
import FormAddProducto from '../Formularios/productos/FormAddProducto'
import { getVivero } from '../../peticiones/Vivero/getVivero'


const ScInventario = () => {

  
  return (
    <main className='container-inventario' >

      <div className='seccion-1'>
          <h2>Lista de productos</h2>
          <ListProductos/>
      </div>

      <div className='seccion-2'>
        
        <FormAddProducto/>
      </div>

    </main>
  )
}

export default ScInventario
