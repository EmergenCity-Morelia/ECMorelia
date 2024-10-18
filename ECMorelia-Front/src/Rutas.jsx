import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from "./App";
import Formulario from "./components/Registro/Formulario";
import Mapa from "./components/Mapa/Mapa";
import Ambulancias from "./components/Mapa/Ambulancias";
import Paramédicos from "./components/Mapa/Paramédicos";
import Hospitales from "./components/Mapa/Hospitales";
import Operadores from "./components/Mapa/Operadores";
import Médicos from "./components/Mapa/Médicos";
import FormularioIngreso from './components/Ingreso/FormularioIngreso';
import RContrasena from './components/RecuperacionContraseña/RContrasena';
import NuevaContrasena from './components/NuevaContrasena/NuevaContrasena';

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/FormularioIngreso" element={<FormularioIngreso />} />
                <Route path="/RContrasena" element={<RContrasena />} />
                <Route path="/NuevaContrasena" element={<NuevaContrasena />} />
                <Route path="/Mapa" element={<Mapa />} />
                <Route path="/Ambulancias" element={<Ambulancias />} />
                <Route path="/Paramédicos" element={<Paramédicos />} />
                <Route path="/Hospitales" element={<Hospitales />} />
                <Route path="/Operadores" element={<Operadores />} />
                <Route path="/Médicos" element={<Médicos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;