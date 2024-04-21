import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemPerdida = ({data}) => {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{data.fecha}</Card.Title>
                <Card.Text>
                no se que pones
                </Card.Text>
                <Button variant="primary">ver detalle</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemPerdida
