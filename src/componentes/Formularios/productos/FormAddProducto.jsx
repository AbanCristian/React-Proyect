import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const FormAddProducto = () => {

    const url = ` https://appvivero-4b4a35470ac8.herokuapp.com/api/Producto `
    const [validated, setValidated] = useState(false);
    const [formData, setFormData ] = useState({
        nombre: '',
        descripcion: '',
        imagen: null,
        precio: '', 
        existencia: ''
    });

    const handleChange = (event) =>{
        const {name, value, files} = event.target;
        let nuevoValor;
        if(name === 'precio')
        {
            nuevoValor = parseFloat(value);
        }else if(name === 'existencia')
        {
            nuevoValor = parseInt(value,10);
        }else if(name === 'imagen')
        {
            nuevoValor = files[0];
        }else{
            nuevoValor = value;
        }

        setFormData({
            ...formData,
            [name]: nuevoValor
        });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();  
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }else{
        try {
            const dataForm = new FormData();
            for(const key in formData)
            {
                dataForm.append(key, formData[key]);
            }

            const response = axios.post(url, dataForm);
            console.log(response);
        } catch (error) {
            console.error('no galo, mira porque:', error)
        }
        
      }
  
      setValidated(true);
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
                            name={formData.nombre}
                            onChange={handleChange}
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
                            name={formData.descripcion}
                            onChange={handleChange}
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
                                name={formData.precio}
                                onChange={handleChange}
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
                                name={formData.existencia}
                                onChange={handleChange}
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
                            name={formData.imagen}
                            onChange={handleChange}

                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            Requerido
                            </Form.Control.Feedback>
                    </Form.Group>
                </Row>
          
          <Button type="submit">Agregar</Button>
        </Form>
        </div>

      );
}

export default FormAddProducto
