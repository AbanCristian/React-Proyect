import React from 'react'
import ItemPerdida from './ItemPerdida'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
