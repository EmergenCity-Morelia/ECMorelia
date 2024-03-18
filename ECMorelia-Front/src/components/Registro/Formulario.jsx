import { useNavigate } from 'react-router-dom';
import usuario from '../img/usuario.png';

const Formulario = () => {
    const navigate=useNavigate();
    return(
        

//declaramos el contenedor que tendrá el header y formulario. La primera parte es el header y dentro del form viene el formulario
        <div className="container max-w-md mx-auto text-center">


<h1 className="uppercase font-bold text-5xl text-center mt-9 text-gray-900">Darse de alta</h1> 
            <p className="font-semibold text-3x1 text-center mt-10 text-gray-900">Realiza el registro llenando el siguiente formulario</p>  
        
           <form className="bg-gray-300 rounded-lg py-10 px-5 mt-5 shadow-lg">
           <img className="usuario w-32 ml-36" src={usuario} alt="Imagen usuario" />         
                <div>
                    <label htmlFor="nombre" className="ml-10 block text-blue-950 uppercase font-bold text-2xl text-left mt-4">NOMBRE</label>
                    <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre Completo"
                    className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="ml-10 block text-blue-950 uppercase font-bold text-2xl text-left">CORREO ELECTRONICO</label>
                    <input 
                    id="email"
                    type="email"
                    placeholder="Correo electronico"
                    className="ml-29 mt-2 border-2 w-80 p-2 mt-2 placeholder-stone-400 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="contraseña" className="ml-10 block text-blue-950 uppercase font-bold text-2xl text-left">CONTRASEÑA</label>
                    <input 
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña con mas de 5 caracteres"
                    className=" ml-29 mt-2 border-2 w-80 p-2 mt-2 placeholder-stone-400 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="fechaNacimiento" className="ml-10 block text-blue-950 uppercase font-bold text-2xl text-left">FECHA NACIMIENTO</label>
                    <input 
                    id="fechaNacimiento"
                    type="date"
                    className="ml-29 mt-2 border-2 w-80 p-2 mt-2 rounded-md "
                    />
                </div>
                
            <input type="submit" 
            className="rounded-md bg-cyan-500 p-3 text-white uppercase font-bold hover:bg-cyan-300 transition-colors w-80 mt-5 "
            value="Registrar"
            />
             <h2 className="font-medium mt-10">
        ¿Ya tienes cuenta?,
        <button 
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2"
          onClick={() => navigate('/FormularioIngreso')}>
          Iniciar Sesión
        </button>
      </h2>
            </form>
        </div>
        
    )
    
}

export default Formulario