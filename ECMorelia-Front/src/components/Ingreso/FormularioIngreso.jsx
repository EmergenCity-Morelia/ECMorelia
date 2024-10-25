import { useNavigate } from "react-router-dom";
const FormularioIngreso = () => {
	const navigate = useNavigate();

	return (
		// declaramos el contenedor que tendrá el header y formulario. La primera parte es el header y dentro del form viene el formulario
		<div className="mt-50 container max-w-md mx-auto text-center">
			<h1 className="font-black text-5xl text-center mt-9 text-neutral-900">BIENVENIDO A</h1>
			<span></span> <h1 className="font-black text-5xl text-center text-cyan-400">EMERGENCITY</h1>
			<h2 className="font-medium text-3x1 text-center mt-10 text-neutral-900">Inicia Sesión para continuar</h2>
			<form className="bg-gray-300 rounded-lg py-10 px-5 mt-5 shadow-lg">
				<div className="mt-5">
					<label htmlFor="email" className="ml-10 block text-blue-950 uppercase font-bold text-2xl text-left">
						CORREO ELECTRONICO
					</label>
					<input
						id="email"
						type="email"
						placeholder="Correo electronico"
						className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="contraseña" className="ml-10 block text-blue-950 uppercase font-bold text-2xl text-left">
						CONTRASEÑA
					</label>
					<input
						id="contraseña"
						type="password"
						placeholder="Ingresa tu contraseña"
						className=" ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
					/>
				</div>

				<input
					type="submit"
					className="rounded-md bg-cyan-500 p-3 text-white uppercase font-bold hover:bg-cyan-300 transition-colors w-80 mt-5 "
					value="Ingresar"
					onClick={() => navigate("/mapa")}
				/>
				<button
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2"
					onClick={() => navigate("/signup")}
				>
					Registrarme
				</button>
				<button
					href="#"
					className=" font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2"
					onClick={() => navigate("/recover-password")}
				>
					Olvide mi contraseña
				</button>
			</form>
		</div>
	);
};
export default FormularioIngreso;
