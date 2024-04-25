import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

const FormAddCategoria = () => {
    const navigate = useNavigate();
    const url = 'https://appvivero-4b4a35470ac8.herokuapp.com/api/Categoria';
    const [nombre, setNombre] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = {
                nombre: nombre
            };
            const response = await axios.post(url, body);
            console.log(response);
            console.log(nombre);
            // Actualizar la lista de categorías o recargar la página después de agregar la nueva categoría
            navigate('/categorias');
        } catch (error) {
            console.error(error);
            setError('Hubo un error al agregar la categoría. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <section>
            {error && <p>{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='nombre'>Nombre de la categoría</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ejemplo: Frutas"
                        value={nombre}
                        onChange={event => setNombre(event.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Agregar</Button> {' '}
                <Button variant="secondary"> <Link to={"/categorias"}> Regresar </Link></Button>
            </Form>
        </section>
    );
};

export default FormAddCategoria;
