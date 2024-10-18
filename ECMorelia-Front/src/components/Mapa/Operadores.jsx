import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Operadores() {
    const [visible, setVisible] = useState(false);
    const [operadores, setOperadores] = useState([
        { id: 1, nombre: 'Luis Hernández', turno: 'Diurno', contraseña: 'abcd' },
        { id: 2, nombre: 'María López', turno: 'Nocturno', contraseña: 'efgh' }
    ]);

    const [selectedOperador, setSelectedOperador] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newOperador, setNewOperador] = useState({ id: null, nombre: '', turno: '', contraseña: '' });

    const openDialog = (operador = { id: null, nombre: '', turno: '', contraseña: '' }) => {
        setNewOperador(operador);
        setEditMode(!!operador.id);
        setDialogVisible(true);
    };

    const saveOperador = () => {
        if (editMode) {
            setOperadores(operadores.map(o => (o.id === newOperador.id ? newOperador : o)));
        } else {
            setOperadores([...operadores, { ...newOperador, id: operadores.length + 1 }]);
        }
        setDialogVisible(false);
    };

    const deleteOperador = (id) => {
        setOperadores(operadores.filter(o => o.id !== id));
    };

    return (
        <div>
            <header className="bg-gray-400 flex items-center h-18 p-4">
                <Button icon="pi pi-angle-double-right" onClick={() => setVisible(true)} />
                <div className="flex-grow">
                    <div className="flex justify-center items-center">
                        <h1 className='font-medium text-3xl text-slate-200'>EMERGENCITY</h1>
                        <img className="w-16 h-16" src={logo} alt="Logo" />
                    </div>
                </div>

                <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-96 md:w-20rem lg:w-30rem">
                    <h2>EMERGENCIA</h2>
                    <div className="flex flex-col space-y-4">
                        <Button label="Gestión de Ambulancias" icon="pi pi-database" onClick={() => navigate('/Ambulancias')} />
                        <Button label="Gestión Paramédicos" icon="pi pi-database" onClick={() => navigate('/Paramédicos')} />
                        <Button label="Gestión de Hospitales" icon="pi pi-database" onClick={() => navigate('/Hospitales')} />
                        <Button label="Gestión de Operadores" icon="pi pi-database" onClick={() => navigate('/Operadores')} />
                        <Button label="Gestión de Médicos" icon="pi pi-database" onClick={() => navigate('/Médicos')} />
                    </div>
                </Sidebar>

                <div className="dropdown dropdown-end">
                    <button className="mr-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={usuario} alt="Perfil" />
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content shadow bg-white absolute w-50 right-12 mt-2 p-2 rounded z-50">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white">
                                <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => navigate('/FormularioIngreso')}>
                                    Cerrar Sesión
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <h2 className="flex justify-center items-center text-2xl mt-6 font-semibold">Gestión de Operadores</h2>

            <div className="flex justify-end mb-3 mt-3">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white" onClick={() => openDialog()}>
                    <span className="relative px-10 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Agregar Operador
                    </span>
                </button>
            </div>

            <div className="flex justify-center">
                <div className="w-3/4">
                    <DataTable value={operadores} responsiveLayout="scroll">
                        <Column field="id" header="ID" />
                        <Column field="nombre" header="Nombre" />
                        <Column field="turno" header="Turno" />
                        <Column field="contraseña" header="Contraseña" />

                        <Column header="Acciones" body={(rowData) => (
                            <div className="flex">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-md mr-2 w-10 h-10 flex justify-center items-center" onClick={() => openDialog(rowData)}>
                                    <i className="pi pi-pencil"></i>
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-md w-10 h-10 flex justify-center items-center" onClick={() => deleteOperador(rowData.id)}>
                                    <i className="pi pi-trash"></i>
                                </button>
                            </div>
                        )} />
                    </DataTable>
                </div>
            </div>

            <Dialog header={editMode ? "Editar Operador" : "Agregar Operador"} visible={dialogVisible} style={{ width: '50vw' }} onHide={() => setDialogVisible(false)}>
                <div className="p-field mt-2">
                    <label htmlFor="nombre" className="block mb-1">Nombre</label>
                    <InputText id="nombre" value={newOperador.nombre} onChange={(e) => setNewOperador({ ...newOperador, nombre: e.target.value })} className="p-inputtext w-full mb-2" />
                </div>
                <div className="p-field mt-2">
                    <label htmlFor="turno" className="block mb-1">Turno</label>
                    <InputText id="turno" value={newOperador.turno} onChange={(e) => setNewOperador({ ...newOperador, turno: e.target.value })} className="p-inputtext w-full mb-2" />
                </div>
                <div className="p-field mt-2">
                    <label htmlFor="contraseña" className="block mb-1">Contraseña</label>
                    <InputText id="contraseña" value={newOperador.contraseña} onChange={(e) => setNewOperador({ ...newOperador, contraseña: e.target.value })} className="p-inputtext w-full mb-2" />
                </div>

                <div className="p-dialog-footer flex justify-center space-x-2 mt-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={saveOperador}>
                        <i className="pi pi-check"></i> Guardar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => setDialogVisible(false)}>
                        <i className="pi pi-times"></i> Cancelar
                    </button>
                </div>
            </Dialog>
        </div>
    );
}
