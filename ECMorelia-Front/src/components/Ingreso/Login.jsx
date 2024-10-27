import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../auth/useAuth";

// Se puede refactorizar a un custom hook la logica de yup y formik
const validationSchema = Yup.object().shape({
	role: Yup.string().required("El tipo de usuario es requerido"),
	licencia_medica: Yup.string()
		.required("La licencia médica es requerida")
		.matches(/^[A-Z0-9]+$/, "La licencia médica solo puede contener letras mayúsculas y números"),
	password: Yup.string().required("La contraseña es requerida").min(6, "La contraseña debe tener al menos 5 caracteres")
});

const initialValues = {
	role: "",
	licencia_medica: "",
	password: ""
};

const roles = [
	{ role: "Operador", value: "operador" },
	{ role: "Paramedico", value: "paramedicos" },
	{ role: "Hospital", value: "hospital" },
	{ role: "Medico", value: "doctor" }
];

const Login = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			try {
				await fetch(`${import.meta.env.VITE_API}/auth/login/${values.role}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(values)
				});

				setAuth(true);
				navigate("/mapa");
			} catch (error) {
				throw new Error(error.message);
			}
		}
	});

	return (
		<div className="container max-w-md flex flex-col justify-center mx-auto pt-9 text-center">
			<h1 className="font-black text-5xl text-center text-neutral-900 dark:text-gray-200">BIENVENIDO A</h1>
			<span className="font-black text-5xl text-center text-cyan-400">EMERGENCITY</span>
			<h2 className="font-medium text-3x1 text-center my-10 text-neutral-900 dark:text-gray-100">
				Inicia Sesión para continuar
			</h2>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col gap-5 items-center bg-gray-300 dark:bg-neutral-900 rounded-lg p-10 shadow-lg"
			>
				<div className="w-full">
					<label
						htmlFor="role"
						className="block text-blue-950 dark:text-gray-200 uppercase font-bold text-2xl text-left"
					>
						Usuario
					</label>
					<Dropdown
						value={formik.values.role}
						onChange={formik.handleChange}
						options={roles}
						optionLabel="role"
						name="role"
						placeholder="Seleciona tu usuario"
						className="w-full rounded-md text-left mt-2 capitalize"
					/>
				</div>
				<div className="w-full">
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
						value={formik.values.licencia_medica}
						onChange={formik.handleChange}
						placeholder="Licencia Medica"
						className="mt-2 border-2 w-full p-2 placeholder-stone-400 rounded-md "
					/>
				</div>
				<div className="w-full">
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
						value={formik.values.password}
						onChange={formik.handleChange}
						placeholder="Ingresa tu contraseña"
						className=" ml-29 mt-2 border-2 w-full p-2 placeholder-stone-400 rounded-md "
					/>
				</div>
				<button
					type="submit"
					className="rounded-md bg-cyan-500 p-3 text-white uppercase font-bold hover:bg-cyan-300 transition-colors w-full mt-5 cursor-pointer"
				>
					Ingresar
				</button>
				<div className="flex gap-3">
					<button
						type="submit"
						className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2"
						onClick={() => navigate("/")}
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
				</div>
			</form>
		</div>
	);
};
export default Login;
