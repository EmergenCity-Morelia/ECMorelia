

const Formulario = () => {
    return(
        <div className="container mx-auto text-center">
           <form className="bg-gray-300 shadow-md rounded-lg py-10 px-5">
                <div>
                    <label htmlFor="nombre" className="block text-blue-950 uppercase font-bold text-2xl text-left">NOMBRE</label>
                    <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre Completo"
                    className="border-2 w-full p-2 mt-2 placeholder-stone-800 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="block text-blue-950 uppercase font-bold text-2xl text-left">CORREO ELECTRONICO</label>
                    <input 
                    id="email"
                    type="email"
                    placeholder="Correo electronico"
                    className="border-2 w-full p-2 mt-2 placeholder-stone-800 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="contraseña" className="block text-blue-950 uppercase font-bold text-2xl text-left">CONTRASEÑA</label>
                    <input 
                    id="contraseña"
                    type="text"
                    placeholder="Contraseña con mas de 5 caracteres"
                    className="border-2 w-full p-2 mt-2 placeholder-stone-800 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="fechaNacimiento" className="block text-blue-950 uppercase font-bold text-2xl text-left">FECHA NACIMIENTO</label>
                    <input 
                    id="fechaNacimiento"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-stone-800 rounded-md "
                    />
                </div>
                
            <input type="submit" 
            className="bg-cyan-500 p-3 text-white uppercase font-bold hover:bg-cyan-300 transition-colors w-full mt-5"
            value="Registrar"
            />
            </form>

            
        </div>
        
    )
}
export default Formulario