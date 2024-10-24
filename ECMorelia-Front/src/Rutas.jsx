import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Formulario from "./components/Registro/Formulario";
import Mapa from "./components/Mapa/Mapa";
import Ambulancias from "./components/Mapa/Ambulancias";
import Paramédicos from "./components/Mapa/Paramédicos";
import Hospitales from "./components/Mapa/Hospitales";
import Operadores from "./components/Mapa/Operadores";
import Médicos from "./components/Mapa/Médicos";
import FormularioIngreso from "./components/Ingreso/FormularioIngreso";
import RContrasena from "./components/RecuperacionContraseña/RContrasena";
import NuevaContrasena from "./components/NuevaContrasena/NuevaContrasena";

function Rutas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/formulario" element={<Formulario />} />
				<Route path="/formularioIngreso" element={<FormularioIngreso />} />
				<Route path="/rcontrasena" element={<RContrasena />} />
				<Route path="/nuevaContrasena" element={<NuevaContrasena />} />
				<Route path="/mapa" element={<Mapa />} />
				<Route path="/ambulancias" element={<Ambulancias />} />
				<Route path="/paramédicos" element={<Paramédicos />} />
				<Route path="/hospitales" element={<Hospitales />} />
				<Route path="/operadores" element={<Operadores />} />
				<Route path="/medicos" element={<Médicos />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Rutas;
