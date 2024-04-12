import React from 'react'
import axios from 'axios'

const BuscarItems = async () => {
    const url = 'http://localhost:7037/api/Usuario';

    const getOrdenes = await axios.get(url)

 
    console.log(getOrdenes.data);
  return (
    <div>
      
    </div>
  )
}

export default BuscarItems
