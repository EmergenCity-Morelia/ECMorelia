import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import { OperadorFormulario } from "./components/Registro/OperadorFormulario";
import Mapa from "./components/Mapa/Mapa";
import Ambulancias from "./components/Mapa/Ambulancias";
import Paramedicos from "./components/Mapa/Paramédicos";
import Hospitales from "./components/Mapa/Hospitales";
import Operadores from "./components/Mapa/Operadores";
import Médicos from "./components/Mapa/Médicos";
import FormularioIngreso from "./components/Ingreso/FormularioIngreso";
import RContrasena from "./components/RecuperacionContraseña/RContrasena";
import NuevaContrasena from "./components/NuevaContrasena/NuevaContrasena";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { DoctorFormulario } from "./components/Registro/DoctorFormulario";
import { HospitalFormulario } from "./components/Registro/HospitalFormulario";
import { AuthProvider } from "./auth/AuthProvider";

function Rutas() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/signup">
						<Route path="operador" element={<OperadorFormulario />} />
						<Route path="doctor" element={<DoctorFormulario />} />
						<Route path="hospital" element={<HospitalFormulario />} />
					</Route>
					<Route path="/login" element={<FormularioIngreso />} />
					<Route path="/recover-password" element={<RContrasena />} />
					<Route path="/new-password" element={<NuevaContrasena />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/mapa" element={<Mapa />} />
						<Route path="/ambulancias" element={<Ambulancias />} />
						<Route path="/paramedicos" element={<Paramedicos />} />
						<Route path="/hospitales" element={<Hospitales />} />
						<Route path="/operadores" element={<Operadores />} />
						<Route path="/medicos" element={<Médicos />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default Rutas;
