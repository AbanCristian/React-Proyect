import ScVentas from "./componentes/pg-ventas/Ventas"
import {ScHome} from "./componentes/pg-home/Home"
import ScConfiguracion from "./componentes/pg-configuracion/Configuracion"
import ScPerdidas from "./componentes/pg-perdidas/Perdidas"
import ScInventario from "./componentes/pg-inventario/Inventario"
import Sidebar from "./componentes/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScCategorias from "./componentes/pg-categoria/Categorias"




function App() {

  return (
    <div className="grid-container">
      <BrowserRouter>
          <Sidebar/>
    
          <Routes>
            <Route path="/" element={<ScHome/>} />
            <Route path="/ventas" element={<ScVentas/>} />
            <Route path="/perdidas" element={<ScPerdidas/>} />
            <Route path="/inventario" element={<ScInventario/>} />
            <Route path="/configuracion" element={<ScConfiguracion/>} />
            <Route path="/categorias" element={<ScCategorias/>} />
          </Routes>
    
      </BrowserRouter>      
    </div>


  )
}

export default App
