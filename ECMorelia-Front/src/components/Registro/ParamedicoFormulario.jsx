import { useNavigate } from "react-router-dom";
import usuario from "../img/usuario.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	nombre: Yup.string()
		.required("El nombre es obligatorio")
		.min(2, "El nombre debe tener al menos 2 caracteres")
		.max(50, "El nombre no puede exceder los 50 caracteres"),
	apellidos: Yup.string()
		.required("El apellido es obligatorio")
		.min(2, "El nombre debe tener al menos 2 caracteres")
		.max(50, "El nombre no puede exceder los 50 caracteres"),
	licencia_medica: Yup.string().required("La licencia médica es requerida"),
	certificado: Yup.string().required("El certificado es obligatorio"),
	licencia_conducir: Yup.string().required("La licencia de conducir es requerida"),
	password: Yup.string().required("La contraseña es requerida").min(6, "La contraseña debe tener al menos 5 caracteres")
});

const initialValues = {
	nombre: "",
	apellidos: "",
	licencia_medica: "",
	certificado: "",
	licencia_conducir: "",
	password: ""
};

export const ParamedicoFormulario = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			try {
				await fetch(`${import.meta.env.VITE_API}/auth/signup/paramedicos`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(values)
				});
				navigate("/login");
			} catch (error) {
				console.error(error.message);
			}
		}
	});

	return (
		<div className="w-fit mx-auto text-center flex flex-col justify-center min-h-dvh">
			<h1 className="uppercase font-bold text-4xl text-center text-gray-900 dark:text-sky-400">Registro Paramedico</h1>
			<p className="font-semibold text-3x1 text-center mt-5 text-gray-900 dark:text-sky-200">
				Realiza el registro llenando el siguiente formulario
			</p>

			<form
				className="flex flex-col gap-5 items-center bg-white dark:bg-neutral-900 rounded-xl py-10 px-5 mt-5 shadow-lg"
				onSubmit={formik.handleSubmit}
			>
				<img className="w-32 dark:invert" src={usuario} alt="Imagen usuario" />
				<div className="flex flex-col md:flex-row gap-3 md:gap-6">
					<fieldset className="flex flex-col gap-3">
						<div>
							<label
								htmlFor="nombre"
								className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
							>
								NOMBRE
							</label>
							<input
								id="nombre"
								type="text"
								name="nombre"
								placeholder="Nombre"
								className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
								value={formik.values.nombre}
								onChange={formik.handleChange}
							/>
							{formik.errors.nombre && <p className="text-red-500 font-bold">{formik.errors.nombre}</p>}
						</div>

						<div>
							<label
								htmlFor="apellidos"
								className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
							>
								APELLIDO
							</label>
							<input
								id="apellidos"
								type="text"
								name="apellidos"
								placeholder="Apellidos"
								className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
								value={formik.values.apellidos}
								onChange={formik.handleChange}
							/>
							{formik.errors.apellidos && <p className="text-red-500 font-bold">{formik.errors.apellidos}</p>}
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
							>
								CONTRASEÑA
							</label>
							<input
								id="password"
								type="password"
								name="password"
								placeholder="Contraseña con mas de 5 caracteres"
								className=" ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
								value={formik.values.password}
								onChange={formik.handleChange}
							/>
							{formik.errors.password && <p className="text-red-500 font-bold">{formik.errors.password}</p>}
						</div>
					</fieldset>
					<fieldset className="flex flex-col gap-3">
						<div>
							<label
								htmlFor="licencia_medica"
								className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
							>
								Licencia Medica
							</label>
							<input
								id="licencia_medica"
								type="text"
								name="licencia_medica"
								placeholder="Licencia Medica"
								className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
								value={formik.values.licencia_medica}
								onChange={formik.handleChange}
							/>
							{formik.errors.licencia_medica && (
								<p className="text-red-500 font-bold">{formik.errors.licencia_medica}</p>
							)}
						</div>

						<div>
							<label
								htmlFor="certificado"
								className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
							>
								certificado
							</label>
							<input
								id="certificado"
								type="text"
								name="certificado"
								placeholder="Certificado"
								className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
								value={formik.values.certificado}
								onChange={formik.handleChange}
							/>
							{formik.errors.certificado && <p className="text-red-500 font-bold">{formik.errors.certificado}</p>}
						</div>

						<div>
							<label
								htmlFor="licencia_conducir"
								className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
							>
								Licencia de conducir
							</label>
							<input
								id="licencia_conducir"
								type="text"
								name="licencia_conducir"
								placeholder="Licencia para conducir"
								className="ml-29 mt-2 border-2 w-80 p-2 placeholder-stone-400 rounded-md "
								value={formik.values.licencia_conducir}
								onChange={formik.handleChange}
							/>
							{formik.errors.licencia_conducir && (
								<p className="text-red-500 font-bold">{formik.errors.licencia_conducir}</p>
							)}
						</div>
					</fieldset>
				</div>
				<input
					type="submit"
					className="rounded-md bg-cyan-500 p-3 text-white uppercase font-bold hover:bg-cyan-300 transition-colors w-80 mt-5"
					value="Registrar"
				/>
				<h2 className="font-medium mt-10 dark:text-gray-600">
					¿Ya tienes cuenta?
					<button
						className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2 mt-2"
						onClick={() => navigate("/login")}
					>
						Iniciar Sesión
					</button>
				</h2>
			</form>
		</div>
	);
};
