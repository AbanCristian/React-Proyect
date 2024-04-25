import React from 'react'
import ItemPerdida from './ItemPerdida'


const ListPerdidas = ( {perdidas} ) => {

  return (
    <div>
        <h2>Lista de perdidas</h2>

        <section>
            {

                perdidas.map( perdida =>(
                    <ItemPerdida data={perdida} key={perdida.id}/>
                ))
            }            
        </section>

    </div>
  )
}

export default ListPerdidas
