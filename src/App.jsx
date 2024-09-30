//Estilos
import './index.css'
//Libreria para las rutas
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Compontentes
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Politicas } from './pages/LandingPage/Politicas';

function App() {

  return (
    <>
    <BrowserRouter>
    {/* Ruta principal a la LandingPage */}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      {/* Ruta a la parte de politica de tratamiento de datos personales */}
      <Routes>
        <Route path='PoliticaDatos' element={<Politicas/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
