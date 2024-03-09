import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from "./App";
import Formulario from "./components/Registro/Formulario";

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Formulario" element={<Formulario />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;
