import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const FormAddProducto = () => {

    const url = 'https://appvivero-4b4a35470ac8.herokuapp.com/api/Producto';
    const [validated, setValidated] = useState(false);
    const [form, setFormData ] = useState({
        nombre: '',
        descripcion: '',
        UrlfotoProducto: null,
        precio: '', 
        existencia: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Precio = parseFloat(form.precio);
        const Existencia = parseInt(form.existencia);


            if (!isNaN(Precio) && !isNaN(Existencia)){
                // Crear un nuevo objeto FormData para almacenar los datos del formulario
                const formData = new FormData();
                
                // Agregar los campos del formulario al objeto FormData

                formData.append('nombre', form.nombre);
                formData.append('descripcion', form.descripcion);
                formData.append('UrlfotoProducto', form.UrlfotoProducto);
                formData.append('precio', Precio);
                formData.append('existencia', Existencia); 

                try {
                    // Nota: cuando envie el formData hay que poner el mismo nombre que pide el endpoint del api de lo contrario generará un error
                    // posiblemente es necesario que tenga el mismo nombre para que el api sepa a que campo hace referencia.

                    const response = await axios.post(url, formData,{
                        params: {
                            Idestado: 1,
                            CategoriaID: 1,
                            viveroId: 1
                        }
                    });
                    console.log('Respuesta del servidor:', response.data);
                    
                    // Aquí puedes manejar la respuesta del servidor según tus necesidades
                } catch (error) {
                    console.error('Error al enviar la petición:', error);
                    // Aquí puedes manejar el error de la petición según tus necesidades
                }

            } else {
                console.error('Los valores de precio y existencia deben ser números válidos');
                return null;
            }

    };

    return (

        <div className='container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label htmlFor='nombre'>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ejem. Rosa blanca"
                            name={form.nombre}
                            onChange={e => setFormData({...form, nombre: e.target.value})}
                        />
                        <Form.Control.Feedback type="invalid">
                        Valor requerido
                        </Form.Control.Feedback>
                        
                    </Form.Group>

                    <Form.Group as={Col} md="4" >
                        <Form.Label htmlFor='descripcion'>Descripción</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ejem. rosas rojas del desierto"
                            name={form.descripcion}
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
                                onChange={e => setFormData({...form, precio: e.target.value})}
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                Valor requerido
                                </Form.Control.Feedback>
                            </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor='existencia'>Existencias</Form.Label>
                            <InputGroup hasValidation>

                                <Form.Control
                                type="text"
                                placeholder="Ejem. 50"
                                name={form.existencia}
                                onChange={e => setFormData({...form, existencia: e.target.value})}
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                Valor requerido
                                </Form.Control.Feedback>
                            </InputGroup>
                    </Form.Group>

                    <Form.Group className="position-relative mb-3">
                        <Form.Label htmlFor='imagen'>File</Form.Label>
                            <Form.Control
                            type="file"
                            required
                            name={form.UrlfotoProducto}
                            onChange={e => setFormData({...form, UrlfotoProducto: e.target.files[0]})}

                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            Requerido
                            </Form.Control.Feedback>
                    </Form.Group>
                </Row>
          
                <Button type="submit">Agregar</Button> {' '}
                <Button variant="secondary"> <Link to={"/inventario"}> Regresar </Link></Button>
                
            </Form>
        </div>

      );
}

export default FormAddProducto
