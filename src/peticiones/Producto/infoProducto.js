import axios from "axios";

export const getByIdProducto = async ({id}) => {

    let data = [];

    try {
        const url = `https://appvivero-4b4a35470ac8.herokuapp.com/api/Producto/${id}`; 
        const respuesta =  await axios.get(url);
        data = respuesta.data;

    } catch (error) {
        console.log(error);
    }

  return data;
}


export const deleteProductoById = async ({id}) => {

    try {
        await axios.delete(`https://appvivero-4b4a35470ac8.herokuapp.com/api/Producto/${id}`);
        console.log("Eliminado");
    } catch (error) {
        console.log(error);
    }
    
    return null;
}


