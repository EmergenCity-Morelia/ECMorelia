import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import usuario from '../img/usuario.png';
import { API_URL } from '../../auth/constants';
import {useAuth} from '../../auth/AuthProvider';

const Formulario = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [error, setError] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
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

    return(
        // Contenedor con fondo degradado
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="uppercase font-bold text-3xl text-center mt-4 text-gray-900">Darse de alta</h1>
                <p className="font-semibold text-lg text-center mt-2 text-gray-600">Completa el formulario para registrarte</p>
                
                <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    <img className="mx-auto w-24" src={usuario} alt="Imagen usuario" />
                    
                    <div>
                        <label htmlFor="nombre" className="block text-gray-700 font-bold text-lg">Nombre</label>
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
                        <label htmlFor="email" className="block text-gray-700 font-bold text-lg">Correo Electrónico</label>
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
                        <label htmlFor="password" className="block text-gray-700 font-bold text-lg">Contraseña</label>
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
                        <label htmlFor="fechaNacimiento" className="block text-gray-700 font-bold text-lg">Fecha de Nacimiento</label>
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
                        value="Registrar"
                    />

                    <div className="text-center mt-4">
                        <h2 className="font-medium">
                            ¿Ya tienes cuenta?{' '}
                            <button 
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                onClick={() => navigate('/FormularioIngreso')}
                            >
                                Iniciar Sesión
                            </button>
                        </h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;
