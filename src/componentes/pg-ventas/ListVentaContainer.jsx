import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getVivero } from '../../peticiones/Vivero/getVivero';

const ListVentaContainer = () => {

    const [venta, setVenta] = useState([])

    useEffect( () => {
        getVivero().then( (res ) => {
            setVenta(res.ordenes)
        })
    }, [])
    
    // const separaFecha = () =>{
        
    //     console.log(venta.fecha)
    // }

    // separaFecha

    // PENDIENTE : Crear el filtro para poder solo poner la fecha, es decir, recortar hasta antes de la estructura de la fecha.


  return (
    <section>
        <Table striped bordered hover>
            <thead>

                <tr>
                <th>#</th>
                <th>Fecha de la venta</th>
                </tr>

            </thead>
            <tbody>
                {
                    venta.map ( venta => (
                        <tr key={venta.id}>
                            <td>{venta.id}</td>
                            <td>{venta.fecha}</td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    </section>
  )
}

export default ListVentaContainer
