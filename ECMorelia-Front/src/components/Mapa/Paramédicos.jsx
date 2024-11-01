import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import usuario from "../img/usuario.png";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Paramedicos() {
	const [paramedicos, setParamedicos] = useState([
		{ id: 1, nombre: "Carlos Gómez", nivel: "Básico", contraseña: "abcd" },
		{ id: 2, nombre: "Ana Ruiz", nivel: "Avanzado", contraseña: "efgh" }
	]);

	const [selectedParamedico, setSelectedParamedico] = useState(null);
	const [dialogVisible, setDialogVisible] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [newParamedico, setNewParamedico] = useState({ id: null, nombre: "", nivel: "", contraseña: "" });

	const openDialog = (paramedico = { id: null, nombre: "", nivel: "", contraseña: "" }) => {
		setNewParamedico(paramedico);
		setEditMode(!!paramedico.id);
		setDialogVisible(true);
	};

	const saveParamedico = () => {
		if (editMode) {
			setParamedicos(paramedicos.map((p) => (p.id === newParamedico.id ? newParamedico : p)));
		} else {
			setParamedicos([...paramedicos, { ...newParamedico, id: paramedicos.length + 1 }]);
		}
		setDialogVisible(false);
	};

	const deleteParamedico = (id) => {
		setParamedicos(paramedicos.filter((p) => p.id !== id));
	};

	return (
		<div>
			<h2 className="flex justify-center items-center text-2xl mt-6 font-semibold dark:text-gray-200">
				Gestión de Paramédicos
			</h2>

			<div className="flex justify-end mb-3 mt-3">
				<button
					className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white"
					onClick={() => openDialog()}
				>
					<span className="relative px-10 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
						Agregar Paramédico
					</span>
				</button>
			</div>

			<div className="flex justify-center">
				<div className="w-3/4">
					<DataTable value={paramedicos} responsiveLayout="scroll">
						<Column field="id" header="ID" />
						<Column field="nombre" header="Nombre" />
						<Column field="nivel" header="Nivel" />
						<Column field="contraseña" header="Contraseña" />

						<Column
							header="Acciones"
							body={(rowData) => (
								<div className="flex">
									<button
										className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-md mr-2 w-10 h-10 flex justify-center items-center"
										onClick={() => openDialog(rowData)}
									>
										<i className="pi pi-pencil"></i>
									</button>
									<button
										className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-md w-10 h-10 flex justify-center items-center"
										onClick={() => deleteParamedico(rowData.id)}
									>
										<i className="pi pi-trash"></i>
									</button>
								</div>
							)}
						/>
					</DataTable>
				</div>
			</div>

			<Dialog
				header={editMode ? "Editar Paramédico" : "Agregar Paramédico"}
				visible={dialogVisible}
				style={{ width: "50vw" }}
				onHide={() => setDialogVisible(false)}
			>
				<div className="p-field mt-2">
					<label htmlFor="nombre" className="block mb-1">
						Nombre
					</label>
					<InputText
						id="nombre"
						value={newParamedico.nombre}
						onChange={(e) => setNewParamedico({ ...newParamedico, nombre: e.target.value })}
						className="p-inputtext w-full mb-2"
					/>
				</div>
				<div className="p-field mt-2">
					<label htmlFor="nivel" className="block mb-1">
						Nivel
					</label>
					<InputText
						id="nivel"
						value={newParamedico.nivel}
						onChange={(e) => setNewParamedico({ ...newParamedico, nivel: e.target.value })}
						className="p-inputtext w-full mb-2"
					/>
				</div>
				<div className="p-field mt-2">
					<label htmlFor="contraseña" className="block mb-1">
						Contraseña
					</label>
					<InputText
						id="contraseña"
						value={newParamedico.contraseña}
						onChange={(e) => setNewParamedico({ ...newParamedico, contraseña: e.target.value })}
						className="p-inputtext w-full mb-2"
					/>
				</div>

				<div className="p-dialog-footer flex justify-center space-x-2 mt-3">
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						onClick={saveParamedico}
					>
						<i className="pi pi-check"></i> Guardar
					</button>
					<button
						className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
						onClick={() => setDialogVisible(false)}
					>
						<i className="pi pi-times"></i> Cancelar
					</button>
				</div>
			</Dialog>
		</div>
	);
}
