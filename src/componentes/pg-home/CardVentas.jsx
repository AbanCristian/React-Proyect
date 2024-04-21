import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card-style.css';
import { getVivero } from '../../peticiones/Vivero/getVivero';

const CardVentas = () => {
  const[totalVentas, setTotalVentas] = useState([])
  


  useEffect( () => {
    getVivero().then( (res) => {
      setTotalVentas(res.ordenes)
    })
  }, [])




  return (
    <section>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>Ventas</Card.Title>
              <Card.Text>
              Ventas totales: {totalVentas.length}
              </Card.Text>
              <Button variant="primary">
                Ver mas
              </Button>
          </Card.Body>
        </Card>
    </section>
  )
}

export default CardVentas
