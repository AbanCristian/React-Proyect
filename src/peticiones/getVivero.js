

export const getViveros = async() =>{

    const url = `https://viveroapirest.azurewebsites.net/api/Domicilio`;
    const respuesta = await fetch(url);
    const [data] = await respuesta.json();
    
    return data;
}

//Nota:  reviar el ejemplo de la peticion y creacion de gifts, y entender como funciona el codifo
// para reparar este porque las peticiones sirven pero no asi no se manejan los datos, pilas
// Falta crear todos los componentes para el primera pagina y revisar el video de navegacion entre paginas.