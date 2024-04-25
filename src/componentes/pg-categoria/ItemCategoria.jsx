

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const ItemCategoria = ({data}) => {
  return (
    <div> 
        <Card style={{ width: '15rem', margin: '10px' }} >
              <Card.Body>
                <Card.Title>{data.nombre}</Card.Title>
                <Card.Text>
                  Productos registrados: {data.productos.length}
                  <br />
                </Card.Text>
                <Button variant="primary"> Ver más </Button> {''}
                <Button variant="info"> <Link to={`/edit-Categoria/${data.id}`}> Editar </Link> </Button>
              </Card.Body>
        </Card>

    </div>
  )
}

export default ItemCategoria
