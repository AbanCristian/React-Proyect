
import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProducto = ({producto}) => {

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
                </Card.Text>
                <Button variant="primary"> <BsCartPlusFill/> </Button>
              </Card.Body>
        </Card>
    </div>
  )
}

export default CardProducto
