
import React, { useEffect, useState } from 'react'
import './style-listProducto.css'

import { getVivero } from '../peticiones/Vivero/getVivero';
import CardProducto from './CardProducto';


const ListProductos = () => {

    const[listaProductos, setListaProductos] = useState([]);


    useEffect(() =>{
        getVivero().then( (res) => {
            setListaProductos(res.productos)
        })
    },[])
  return (

            <section className='productos'>
                <ul>
                    {
                        listaProductos.map(producto => (
                            <CardProducto producto={producto} key={producto.id}/>

                        ))
                    }
                </ul>
            </section>

        

  )
}

export default ListProductos
