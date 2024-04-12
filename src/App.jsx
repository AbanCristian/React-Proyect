import ScVentas from "./componentes/pg-ventas/Ventas"
import ScHome from "./componentes/pg-home/Home"
import ScConfiguracion from "./componentes/pg-configuracion/Configuracion"
import ScPerdidas from "./componentes/pg-perdidas/Perdidas"
import ScInventario from "./componentes/pg-inventario/Inventario"
import Navbar from "./componentes/navegacion/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
        
      <div>
        <Routes>
          <Route path="/" element={<ScHome/>} />
          <Route path="/ventas" element={<ScVentas/>} />
          <Route path="/perdidas" element={<ScPerdidas/>} />
          <Route path="/inventario" element={<ScInventario/>} />
          <Route path="/configuracion" element={<ScConfiguracion/>} />
        </Routes>
      </div>

   
      
      </BrowserRouter>

    </>
  )
}

export default App
