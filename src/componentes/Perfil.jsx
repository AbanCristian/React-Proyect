import React, { useEffect, useState } from 'react'
import './perfil-style.css'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { getVivero } from '../peticiones/Vivero/getVivero';



const Perfil = () => {
  
  const [user, setUser] = useState([]);

  useEffect( () => {
    getVivero().then( (value) => {

      setUser(value.usuarios[0])
    })
  }, [])


  return (
      <section className='perfil-container'>
 
        <Card style={{ width: '12.9rem', background: '#339128', borderRadius:'0'}}>
          <Image src={user.urlFotoPerfil} roundedCircle style={{margin:'10px'}} /> 
            <Card.Body>
              <Card.Title>{user.nombre}</Card.Title>
              <Card.Text>
                Admin Pro

              </Card.Text>
              
            </Card.Body>
        </Card>
      </section>
  )
}

export default Perfil
