import axios from "axios";

const getCategorias = async() => {

    let data = [];
    try {
        const url = `https://appvivero-4b4a35470ac8.herokuapp.com/api/Categoria`;
        const respuesta = await axios.get(url);
        data = respuesta.data;
    } catch (error) {
        console.log(error);
    }
  return data;
};

export default getCategorias


export const getCategoriaById = async({id}) => {
    let data = [];
    try {
        const url = `https://appvivero-4b4a35470ac8.herokuapp.com/api/Categoria/${id}`;
        const respuesta = await axios.get(url);
        data = respuesta.data;
    } catch (error) {
        console.log(error);
    }
  return data;
}