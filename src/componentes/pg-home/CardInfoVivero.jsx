import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getVivero } from '../../peticiones/Vivero/getVivero';

const CardInfoVivero = () => {
  // nota: revisar el componente porque no se puede acceder a las variales
  const [vivero, setVivero] = useState([]);

  useEffect( () => {
    // const {url, nombre, telefono} = getVivero();
   getVivero().then((value) => {
    setVivero(value)
   } )

    // const info = {url, nombre, telefono};
    // setVivero(info);
  }, [])
  

 
  
  return (
    <section className='container'>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={vivero.url} />
            <Card.Body>
                <Card.Title>{vivero.nombre}</Card.Title>
                <Card.Text>
                Número telefonico: {vivero.telefono}
                </Card.Text>
                <Button variant="primary">ver ventas</Button>
            </Card.Body>
        </Card>
    </section>
  )
}

export default CardInfoVivero
