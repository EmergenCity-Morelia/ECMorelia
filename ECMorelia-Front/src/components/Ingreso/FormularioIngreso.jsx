import { useNavigate } from 'react-router-dom';
import logo from '../img/Logo.png';
import usuario from '../img/formularioIngresoIcono.png'; // Asegúrate de que esta imagen esté en la carpeta correcta

const FormularioIngreso = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 flex flex-col">
            {/* Topbar */}
            <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#002D62] to-[#74C2E1] p-4 flex items-center shadow-lg z-50">
                <img src={logo} alt="Emergencity Logo" className="ml-3" width="65" />
                <h1 className="text-xl font-bold text-white tracking-wide mx-2">EMERGENCITY</h1>
            </nav>

            {/* Contenedor del Formulario */}
            <div className="flex items-center justify-center flex-1 p-8 mt-16">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
                    {/* Sección Izquierda - Imagen o detalles */}
                    <div className="w-1/3 bg-gray-100 p-8 flex flex-col items-center">
                    <img 
                        src={usuario} 
                        alt="Icono Usuario" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '500px', maxHeight: '500px' }} 
                        className="mt-20 mb-4" 
                    />



                        
                    </div>

                    {/* Sección Derecha - Formulario */}
                    <div className="w-2/3 p-8">
                    <h1 className="font-black text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#74C2E1]">
                        BIENVENIDO DE NUEVO
                    </h1>

                        <h2 className="font-medium text-lg text-center mt-4 text-neutral-700">Inicia sesión para continuar</h2>

                        <form className="mt-6 space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-blue-950 uppercase font-bold text-lg text-left">Correo Electrónico</label>
                                <input 
                                    id="email"
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="contraseña" className="block text-blue-950 uppercase font-bold text-lg text-left">Contraseña</label>
                                <input 
                                    id="contraseña"
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md"
                                />
                            </div>

                            <input 
                                type="submit" 
                                className="w-full bg-blue-600 text-white font-bold p-3 rounded-md hover:bg-blue-500 transition-colors" 
                                value="Iniciar Sesión"
                                onClick={() => navigate('/Mapa')}
                            />

                            <div className="text-center mt-4 space-y-2">
                                <button 
                                    className="font-medium text-blue-600 hover:underline"
                                    onClick={() => navigate('/RegistroCuenta')}
                                > 
                                    Registrarme 
                                </button>
                                <br />
                                <button 
                                    className="font-medium text-blue-600 hover:underline"
                                    onClick={() => navigate('/RContrasena')}
                                >
                                    Olvidé mi contraseña
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioIngreso;
