import React, { useEffect, useState } from 'react'
import { BsBagXFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getVivero } from '../../peticiones/Vivero/getVivero';


const CardPerdidas = () => {

 const [totalPerdidas, setTotalPerdidas] = useState([]);

 useEffect( () => {
  getVivero().then((res) => {
    setTotalPerdidas(res.perdidas);
  }) 
 }, [])
  return (
    <section>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title style={{fontSize:'1.5rem'}}>
                <BsBagXFill style={{width: '5rem', height: '2.5rem'}} />Perdidas
                </Card.Title>
              <Card.Text>
              Perdidas totales: {totalPerdidas.length}
              </Card.Text>
              <Button variant="primary">
                Ver mas
              </Button>
          </Card.Body>
        </Card>
    </section>
  )
}

export default CardPerdidas
