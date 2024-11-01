import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Medicos() {
	const [medicos, setMedicos] = useState([
		{ id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", contraseña: "1234" },
		{ id: 2, nombre: "Dra. María López", especialidad: "Pediatría", contraseña: "5678" }
	]);

	const [selectedMedico, setSelectedMedico] = useState(null);
	const [dialogVisible, setDialogVisible] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [newMedico, setNewMedico] = useState({ id: null, nombre: "", especialidad: "", contraseña: "" });

	const openDialog = (medico = { id: null, nombre: "", especialidad: "", contraseña: "" }) => {
		setNewMedico(medico);
		setEditMode(!!medico.id);
		setDialogVisible(true);
	};

	const saveMedico = () => {
		if (editMode) {
			setMedicos(medicos.map((m) => (m.id === newMedico.id ? newMedico : m)));
		} else {
			setMedicos([...medicos, { ...newMedico, id: medicos.length + 1 }]);
		}
		setDialogVisible(false);
	};

	const deleteMedico = (id) => {
		setMedicos(medicos.filter((m) => m.id !== id));
	};

	return (
		<div>
			<h2 className="flex justify-center items-center text-2xl mt-6 font-semibold">Gestión de Médicos</h2>

			<div className="flex justify-end mb-3 mt-3">
				<button
					className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white"
					onClick={() => openDialog()}
				>
					<span className="relative px-10 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
						Agregar Médico
					</span>
				</button>
			</div>

			<div className="flex justify-center">
				<div className="w-3/4">
					<DataTable value={medicos} responsiveLayout="scroll">
						<Column field="id" header="ID" />
						<Column field="nombre" header="Nombre" />
						<Column field="especialidad" header="Especialidad" />
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
										onClick={() => deleteMedico(rowData.id)}
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
				header={editMode ? "Editar Médico" : "Agregar Médico"}
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
						value={newMedico.nombre}
						onChange={(e) => setNewMedico({ ...newMedico, nombre: e.target.value })}
						className="p-inputtext w-full mb-2"
					/>
				</div>
				<div className="p-field mt-2">
					<label htmlFor="especialidad" className="block mb-1">
						Especialidad
					</label>
					<InputText
						id="especialidad"
						value={newMedico.especialidad}
						onChange={(e) => setNewMedico({ ...newMedico, especialidad: e.target.value })}
						className="p-inputtext w-full mb-2"
					/>
				</div>
				<div className="p-field mt-2">
					<label htmlFor="contraseña" className="block mb-1">
						Contraseña
					</label>
					<InputText
						id="contraseña"
						value={newMedico.contraseña}
						onChange={(e) => setNewMedico({ ...newMedico, contraseña: e.target.value })}
						className="p-inputtext w-full mb-2"
					/>
				</div>

				<div className="p-dialog-footer flex justify-center space-x-2 mt-3">
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={saveMedico}>
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
