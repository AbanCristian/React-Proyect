import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemPerdida = ({data}) => {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{data.nombreProducto}</Card.Title>
                <Card.Text>
                  {data.descripcion}
                  <br />
                  {data.cantidad}
                </Card.Text>
                <Button variant="primary">ver detalle</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemPerdida
