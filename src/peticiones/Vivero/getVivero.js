import axios from "axios";


export const getVivero = async() =>{

    let data = [];
    try {
        const url = `https://appvivero-4b4a35470ac8.herokuapp.com/api/Vivero`;
        const respuesta = await axios.get(url);
        data = respuesta.data[0];
    } catch (error) {
       console.log(error);
    }

    return data;

};

