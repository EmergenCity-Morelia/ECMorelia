import Logo from "./components/Login/Logo";
import BotonesLogin from "./components/Login/BotonesLogin";
import EmergencityNombre from "./components/Login/EmergencityNombre";

function App() {
	return (
		<main className="flex flex-col mx-auto container min-h-dvh">
			<div className="mt-16 flex justify-center items-center h-200">
				<Logo />
			</div>

			<div className="mt-24 text-center">
				<EmergencityNombre />
			</div>

			<div>
				<BotonesLogin />
			</div>
		</main>
	);
}

export default App;
