import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "../img/Logo.png";
import usuario from "../img/usuario.png";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";

export default function Mapa() {
	const [visible, setVisible] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div>
			<header className="bg-gray-400 flex items-center h-18 p-4">
				<Button icon="pi pi-angle-double-right" onClick={() => setVisible(true)} />

				<div className="flex-grow">
					<div className="flex justify-center items-center">
						<h1 className="font-medium text-3xl text-slate-200">EMERGENCITY</h1>
						<img className="w-16 h-16" src={logo} alt="Logo" />
					</div>
				</div>

				<Sidebar visible={visible} onHide={() => setVisible(false)} className="w-96 md:w-20rem lg:w-30rem">
					<h2>EMERGENCIA</h2>
					<div className="flex flex-col space-y-4">
						<Button
							label="Gestión de Ambulancias"
							icon="pi pi-database"
							className="p-button-rounded p-button-success mt-4 justify-start"
							onClick={() => navigate("/ambulancias")}
						/>
						<Button
							label="Gestión Paramédicos"
							icon="pi pi-database"
							className="p-button-rounded p-button-success mt-4 justify-start"
							onClick={() => navigate("/paramedicos")}
						/>
						<Button
							label="Gestión de Hospitales"
							icon="pi pi-database"
							className="p-button-rounded p-button-success mt-4 justify-start"
							onClick={() => navigate("/hospitales")}
						/>
						<Button
							label="Gestión de Operadores"
							icon="pi pi-database"
							className="p-button-rounded p-button-success mt-4 justify-start"
							onClick={() => navigate("/operadores")}
						/>
						<Button
							label="Gestión de Médicos"
							icon="pi pi-database"
							className="p-button-rounded p-button-success mt-4 justify-start"
							onClick={() => navigate("/medicos")}
						/>
					</div>
				</Sidebar>
				<div className="dropdown dropdown-end">
					<button className="mr-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
						<img className="w-10 h-10 rounded-full border-2 border-white" src={usuario} alt="Perfil" />
					</button>
					{isDropdownOpen && (
						<div className="dropdown-content shadow bg-white absolute w-50 right-12 mt-2 p-2 rounded z-50">
							<button className="drelative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
								<span
									className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
									onClick={() => navigate("/login")}
								>
									Cerrar Sesión
								</span>
							</button>
						</div>
					)}
				</div>
			</header>
			<React.StrictMode>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</React.StrictMode>
		</div>
	);
}
