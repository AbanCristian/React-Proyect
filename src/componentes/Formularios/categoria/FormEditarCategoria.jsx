import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { getCategoriaById } from '../../../peticiones/Categoria/getCategorias';
import axios from 'axios';
const FormEditarCategoria = () => {
    const {id} = useParams();
    const [nombre, setNombre ] = useState({
        nombre: ''
    });
    
    useEffect(() => {
        getCategoriaById({id}).then((res) => {
            setNombre(res);
        });
    }, []);

    const handleActualizar = async (event) => {
        event.preventDefault();
        try {

            const response = await axios.put(`https://appvivero-4b4a35470ac8.herokuapp.com/api/Categoria/informacion/${id}`, nombre);
            console.log(response.data);
        } catch (error) {
            console.error(error);

        }
    };

  return (
    <section>
        <Form onSubmit={handleActualizar}>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor='nombre'>Nombre de la categoria</Form.Label>
                <Form.Control type="text" placeholder="Ejemplo: Frutas" 
                 value={nombre.nombre}
                 onChange={event => setNombre({...nombre, nombre: event.target.value})}
                />
            </Form.Group>
            <Button type="submit">Agregar</Button> {' '}
            <Button variant="secondary"> <Link to={"/categorias"}> Regresar </Link></Button>
        </Form>

    </section>
  )
}

export default FormEditarCategoria
