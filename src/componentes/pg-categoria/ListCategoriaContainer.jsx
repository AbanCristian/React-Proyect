import React, { useEffect, useState } from 'react'
import getCategorias from '../../peticiones/Categoria/getCategorias';
import ListCategoria from './ListCategoria';

const ListCategoriaContainer = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getCategorias().then((res) => {
            setCategorias(res);
        })
    }, [])
 

  return (
    <div>
      
      <ListCategoria categorias={categorias} />
    </div>
  )
}

export default ListCategoriaContainer
