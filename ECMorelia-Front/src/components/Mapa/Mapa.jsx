
import React, { useState } from 'react';
import logo from '../img/Logo.png';
import usuario from '../img/usuario.png';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function Mapa() {
    const [visible, setVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-gray-400 flex items-center h-18 p-4 w-full">
            <Button icon="pi pi-angle-double-right" onClick={() => setVisible(true)} />
            
            <div className="flex-grow">
                <div className="flex justify-center items-center">
                    <h1 className='font-medium text-3xl text-slate-200'>EMERGENCITY</h1>
                    <img className="w-16 h-16" src={logo} alt="Logo" />
                </div>
            </div>

            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-96 md:w-20rem lg:w-30rem">
                <h2>SIDEBAR EMERGENCIA</h2>
                {/* Aquí irían el resto de tus componentes del sidebar */}
            </Sidebar>

            <div className="dropdown dropdown-end">
                <button className="mr-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img className="w-10 h-10 rounded-full border-2 border-white" src={usuario} alt="Perfil" />
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-content shadow bg-white absolute w-50 right-12 mt-2 p-2 rounded z-50">
                        <button className="drelative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Cerrar Sesión
                                </span>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}



