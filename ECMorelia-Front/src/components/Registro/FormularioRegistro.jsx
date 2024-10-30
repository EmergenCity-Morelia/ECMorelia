import { useState } from 'react';  
import { useNavigate } from 'react-router-dom';
import usuario from '../img/formularioRegistroIcono.jpg';
import logo from '../img/Logo.png'; // Asegúrate de que el logo esté en la carpeta correcta
import { API_URL } from '../../auth/constants';
import { useAuth } from '../../auth/AuthProvider';

const FormularioRegistro = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [error, setError] = useState("");
    const auth = useAuth();

    if (auth.isAuthenticated) {
        return <navigate to="/ingreso/FormularioIngreso.jsx"></navigate>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    fechaNacimiento
                }),
            });

            if (response.ok) {
                console.log("User created successfully");
                navigate('/FormularioIngreso');
            } else {
                console.log("Something went wrong");
                const json = await response.json();
                setError(json.error);
            }
        } catch (error) {
            console.error(error);
            setError('Something went wrong');
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 flex flex-col">
            {/* Topbar */}
            <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#002D62] to-[#74C2E1] p-4 flex items-center shadow-lg z-50">
                <img src={logo} alt="Emergencity Logo" className="ml-3" width="65" />
                <h1 className="text-xl font-bold text-white tracking-wide mx-2">EMERGENCITY</h1>
            </nav>

            {/* Contenido Principal */}
            <div className="flex items-center justify-center flex-1 p-8 mt-16">
                <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-6xl transform transition duration-500">
                    {/* Sección Izquierda - Datos */}
                    <div className="w-1/3 bg-gray-100 p-8 flex flex-col items-center">
                        <img className="w-100  mt-32 mb-4" src={usuario} alt="Usuario" />
                        {/* Sección Izquierda - Datos 
                        <h2 className="text-2xl font-bold text-center mb-4">Confirmación Datos</h2>
                        <p className="mb-2"><strong>Empleado:</strong> {username}</p>
                        <p className="mb-2"><strong>Correo:</strong> {email}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</p>*/}
                    </div>

                    {/* Sección Derecha - Formulario */}
                    <div className="w-2/3 p-8">
                    <h1 className="font-black text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#74C2E1]">
                                REGISTRO DE CUENTA
                    </h1>

                        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                            {error && <div className="text-red-500 text-center">{error}</div>}

                            <div>
                                <label htmlFor="username" className="block text-blue-950 uppercase font-bold text-lg text-left">Nombre Completo:</label>
                                <input 
                                    id="username"
                                    type="text"
                                    placeholder="Nombre Completo"
                                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-blue-950 uppercase font-bold text-lg text-left">Correo Electrónico:</label>
                                <input 
                                    id="email"
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-blue-950 uppercase font-bold text-lg text-left">Contraseña:</label>
                                <input 
                                    id="password"
                                    type="password"
                                    placeholder="Contraseña (mínimo 5 caracteres)"
                                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="fechaNacimiento" className="block text-blue-950 uppercase font-bold text-lg text-left">Fecha de Nacimiento:</label>
                                <input 
                                    id="fechaNacimiento"
                                    type="date"
                                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                    value={fechaNacimiento}
                                    onChange={(e) => setFechaNacimiento(e.target.value)}
                                />
                            </div>

                            <input 
                                type="submit" 
                                className="w-full bg-blue-600 text-white font-bold p-3 rounded-md hover:bg-blue-500 transition-colors" 
                                value="REGISTRAR"
                            />

                        <div className="text-center mt-4">
                                    <h2 className="font-medium">
                                        ¿Ya tienes cuenta?{' '}
                                        <button 
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => navigate('/FormularioIngreso')}>
                                            Iniciar Sesión
                                        </button>
                                    </h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioRegistro;


