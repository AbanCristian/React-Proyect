
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteProductoById } from '../peticiones/Producto/infoProducto';


const CardProducto = ({producto}) => {

  const handleEliminar = (id) => {
      const confirmar = window.confirm('¿Desea eliminar el producto?');
      if (confirmar) {
          deleteProductoById({id});
      }else{
        console.log('cancelado');
      }
  }


  return (
    <div>
        <Card style={{ width: '13rem' }} >
          <Card.Img variant="top" src={producto.urlFotoProducto} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                  Existencia: {producto.existencia}
                  <br />
                  Precio : ${producto.precio}
                  <br />
                  <b>{producto.existencia >= 1 ? 'Disponible' : 'Agotado'}</b>

                </Card.Text>
                
                <Button variant="info"><Link to={`/edit/${producto.id}`}> Editar  </Link> </Button> {' '}
                <Button variant="danger" onClick={e => handleEliminar(producto.id)}> Eliminar</Button>
              </Card.Body>
        </Card>
    </div>
  )
}

export default CardProducto
