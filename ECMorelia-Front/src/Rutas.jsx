import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from "./App";
import Inicio from "./components/Inicio/Inicio";
import Formulario from "./components/Registro/Formulario";
import Mapa from "./components/Mapa/Mapa";
import FormularioIngreso from './components/Ingreso/FormularioIngreso';
import RContrasena from './components/RecuperacionContraseña/RContrasena';
import NuevaContrasena from './components/NuevaContrasena/NuevaContrasena';
import CallButton from './components/Inicio/CallButton';
import VideoCall from './components/Inicio/VideoCall';


function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/videollamada" element={<CallButton />} />
                <Route path="/VideoCall" element={<VideoCall />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/FormularioIngreso" element={<FormularioIngreso />} />
                <Route path="/RContrasena" element={<RContrasena />} />
                <Route path="/NuevaContrasena" element={<NuevaContrasena />} />
                <Route path="/Mapa" element={<Mapa />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;