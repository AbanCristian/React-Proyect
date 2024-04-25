import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getByIdProducto } from '../../../peticiones/Producto/infoProducto';
import axios from 'axios';

const FormEditProducto = () => {
    
    const {id} = useParams();
    // const [data, setData] = useState([]);
    const [form, setFormData ] = useState({
        nombre: '',
        descripcion: '',
        precio: '', 
    });

    useEffect(() => {
        // para usar las petiones por id es necesario poner los corchetes de lo contratio falla la peticion.
        getByIdProducto({id}).then((res) => {
            setFormData(res);
        });

    }, [ ]);

    const handleActualizar = async (event) => {
        event.preventDefault();

        const Precio = parseFloat(form.precio);
        if (!isNaN(Precio)) {
            const formData = new FormData();
            formData.append('nombre', form.nombre);
            formData.append('descripcion', form.descripcion);
            formData.append('precio', Precio);
            try {
                const response = await axios.put(`https://appvivero-4b4a35470ac8.herokuapp.com/api/Producto/informacion/${id}`, formData)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
            
        }
        return null;

    }

  return (

    <div className='container'>
    <Form  onSubmit={handleActualizar}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" >
                <Form.Label htmlFor='nombre'>Nombre</Form.Label>
                <Form.Control
                    
                    type="text"
                    placeholder="Ejem. Rosa blanca"
                    name={form.nombre}
                    value={form.nombre}
                    onChange={e => setFormData({...form, nombre: e.target.value})}
                    
                   
                />
                <Form.Control.Feedback type="invalid">
                Valor requerido
                </Form.Control.Feedback>
                
            </Form.Group>

            <Form.Group as={Col} md="4" >
                <Form.Label htmlFor='descripcion'>Descripción</Form.Label>
                <Form.Control
                    
                    type="text"
                    placeholder="Ejem. rosas rojas del desierto"
                    name={form.descripcion}
                    value={form.descripcion}
                    onChange={e => setFormData({...form, descripcion: e.target.value})}
                />
                <Form.Control.Feedback type="invalid">
                    Valor requerido
                </Form.Control.Feedback>
            </Form.Group>


        </Row>

        <Row>
            <Form.Group as={Col} md="4" >
                <Form.Label htmlFor='precio'>Precio</Form.Label>
                    <InputGroup hasValidation>

                        <Form.Control
                        type="text"
                        placeholder="Ejem. 50"
                        name={form.precio}
                        value={form.precio}
                        onChange={e => setFormData({...form, precio: e.target.value})}
                        
                        />
                        <Form.Control.Feedback type="invalid">
                        Valor requerido
                        </Form.Control.Feedback>
                    </InputGroup>
            </Form.Group>

        </Row>
  
        <Button type="submit">Agregar</Button> {' '}
        <Button variant="secondary"> <Link to={"/inventario"}> Regresar </Link></Button>
        
    </Form>
</div>
  )
}

export default FormEditProducto
