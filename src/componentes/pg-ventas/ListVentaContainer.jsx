import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getVivero } from '../../peticiones/Vivero/getVivero';
import Button from 'react-bootstrap/Button';

const ListVentaContainer = () => {

    const [venta, setVenta] = useState([])

    useEffect( () => {
        getVivero().then( (res ) => {
            setVenta(res.detalleOrdenes)
        })
    }, [])
    


    // const separaFecha = () =>{
        
    //     console.log(venta.fecha)
    // }

    // separaFecha

    // PENDIENTE : Crear el filtro para poder solo poner la fecha, es decir, recortar hasta antes de la estructura de la fecha.


  return (
    <section style={{width:'100%'}}>
        <h3> Lista de ventas</h3>
        <Table striped bordered hover >
            <thead>

                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>

            </thead>
            <tbody>
                {
                    venta.map ( venta => (
                        <tr key={venta.id}>
                            <td>{venta.id}</td>
                            <td>{venta.nombreProducto}</td>
                            <td>{venta.cantidad}</td>
                            <td>
                            <Button variant="info">Ver más</Button>{' '}
                            <Button variant="danger">eliminar</Button>{' '}
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    </section>
  )
}

export default ListVentaContainer
