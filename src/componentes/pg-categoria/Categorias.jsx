import React from 'react'
import ListCategoriaContainer from './ListCategoriaContainer'
import FormAddCategoria from '../Formularios/categoria/FormAddCategoria'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ScCategorias = () => {
  return (
    <main className='container-home'>

      <div className='seccion-1'>
        <h2>Lista de categorias</h2>
      <Button variant="success"><Link to={`/crear-Categoria`}> Agregar  </Link> </Button> {' '}
      <ListCategoriaContainer/>

      </div>

      <div className='seccion-2'>
        <h2>Fomulario para agregar categoria</h2>
        <FormAddCategoria/>
      </div>

    </main>
  )
}

export default ScCategorias
