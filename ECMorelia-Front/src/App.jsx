import Logo from "./components/Login/Logo"
import BotonesLogin from "./components/Login/BotonesLogin"
import EmergencityNombre from "./components/Login/EmergencityNombre"

function App() {
  return (
    <>
    <div className="container mt-16 flex justify-center items-center h-200">
      <Logo/>
    </div>
  
    <div className="container mt-24 text-center">
      <EmergencityNombre/>
    </div>

    <div className="container">
      <BotonesLogin/>
    </div>

  </>
  
  )
}

export default App
