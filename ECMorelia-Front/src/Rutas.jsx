import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import App from "./App";
import FormularioResgistro from './components/Registro/FormularioRegistro';
import Mapa from "./components/Mapa/Mapa";
import FormularioIngreso from './components/Ingreso/FormularioIngreso';
import RContrasena from './components/RecuperacionContraseña/RContrasena';
import NuevaContrasena from './components/NuevaContrasena/NuevaContrasena';
import VideoCall from './components/Inicio/VideoCall';




function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/RegistroCuenta" element={<FormularioResgistro />} />
                <Route path="/VideoCall" element={<VideoCall />} />
                <Route path="/FormularioIngreso" element={<FormularioIngreso />} />
                <Route path="/RContrasena" element={<RContrasena />} />
                <Route path="/NuevaContrasena" element={<NuevaContrasena />} />
                <Route path="/Mapa" element={<Mapa />} />


                

            </Routes>
        </BrowserRouter>
    );
}


export default Rutas;
