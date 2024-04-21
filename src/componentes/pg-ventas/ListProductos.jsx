import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../style-listProducto.css'
import { BsCartPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ListProductos = () => {

    const[listaProductos, setListaProductos] = useState([]);
    const getProductos = async () =>{
        try {
            const url = `https://appvivero-4b4a35470ac8.herokuapp.com/api/Vivero `;
            await axios.get(url)
                .then((value) => {setListaProductos(value.data[0].productos)});
            
        } catch (error) {
            console.log(error);
                
        }
    }

    useEffect(() =>{
        getProductos
    },[])
  return (

            <section className='productos'>
                <button onClick={getProductos}>ver xd</button>
                <ul>
                    {
                        listaProductos.map(producto => (
                            <div key={producto.id} >
                                <Card style={{ width: '18rem' }} >
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

                        ))
                    }
                </ul>
            </section>

        

  )
}

export default ListProductos
