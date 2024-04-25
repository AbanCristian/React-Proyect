import React from 'react'
import ItemCategoria from './ItemCategoria'
const ListCategoria = ({categorias}) => {
  return (
    <section>
        <div>
            {

                categorias.map( categoria =>(
                    <ItemCategoria data={categoria} key={categoria.id}/>
                ))
            }

        </div>

    </section>
  )
}

export default ListCategoria
