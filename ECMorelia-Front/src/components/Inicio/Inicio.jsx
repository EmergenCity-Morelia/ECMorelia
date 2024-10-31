import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import logo from '../img/Logo.png';
import carrusel1 from '../img/carrusel1.jpeg';
import carrusel3 from '../img/carrusel3.jpg';
import carrusel4 from '../img/carrusel4.jpg';
import Slider from 'react-slick';

// Importa los estilos de slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Inicio = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            stringsElement: '#cadenas-texto',
            typeSpeed: 75,
            startDelay: 300,
            backSpeed: 75,
            smartBackspace: true,
            shuffle: false,
            backDelay: 1500,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html',
        };

        const typed = new Typed('.typed', options);
        return () => {
            typed.destroy();
        };
    }, []);

    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Cambia a 500 para hacerlo más rápido
        fade: true,
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Carrusel de imágenes de fondo */}
            <Slider {...settings} className="absolute  w-full h-full z-0">
                <div>
                    <img src={carrusel1} alt="Image 1" className="w-full h-full object-cover filter" style={{ filter: 'blur(0.200rem)' }}  />
                </div>
                <div>
                    <img src={carrusel3} alt="Image 3" className="w-full h-full object-cover filter" style={{ filter: 'blur(0.200rem)' }}  />
                </div>
                <div>
                    <img src={carrusel4} alt="Image 4" className="w-full h-full object-cover filter" style={{ filter: 'blur(0.200rem)' }}  />
                </div>
            </Slider>

            {/* Top Bar */}
            <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#002D62] to-[#74C2E1] p-4 flex items-center shadow-lg z-50">
                <img src={logo} alt="Icono-Healtalk" className="ml-3" width="65" />
                <h1 className="text-xl font-bold text-white tracking-wide mx-2">EMERGENCITY</h1>
            </nav>

            {/* Sección principal con tarjeta sobre el carrusel */}
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white bg-opacity-100 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col items-center">
                    <img
                        src={logo}
                        alt="Logo del Proyecto"
                        className="mb-4" // Sin bordes ni sombras
                        width="150"
                    />
                    <h1 className="text-5xl font-bold text-black drop-shadow-lg">EMERGENCITY</h1>
                    <h2 className="subtitulo-inicio drop-shadow-lg">
                        <span className="typed text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b28059] to-[#2c8aab] animate-brighter"></span>
                    </h2>

                    {/* Texto adicional */}
                    <div id="cadenas-texto" className="hidden">
                        <p className="cadena">Brindando ayuda, salvando vidas</p>
                        <p className="cadena">Tu compromiso hace la diferencia</p>
                    </div>

                    {/* Botones dentro de la tarjeta */}
                    <div className="container mt-10 flex justify-center items-center flex-wrap">
                        {/* Botón Operador */}
                        <button
                            id="botonOperador"
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-600 group-hover:from-orange-400 group-hover:to-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-200"
                            onClick={() => navigate('/signup/operador')}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-xl">
                                Operador
                            </span>
                        </button>
                        {/* Botón Personal Paramédico */}
                        <button
                            id="botonParamedico"
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-600 group-hover:from-orange-400 group-hover:to-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-200"
                            onClick={() => navigate('/signup/paramedico')}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-xl">
                                Personal Paramédico
                            </span>
                        </button>
                        {/* Botón Hospital */}
                        <button
                            id="botonHospital"
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-600 group-hover:from-orange-400 group-hover:to-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-200"
                            onClick={() => navigate('/signup/hospital')}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-xl">
                                Hospital
                            </span>
                        </button>
                        {/* Botón Llamada */}
                        <button
                            id="botonLlamada"
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-400 to-orange-600 group-hover:from-orange-400 group-hover:to-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-200"
                            onClick={() => navigate('/VideoCall')}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-xl">
                                Llamada 
                            </span>
                        </button>
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Inicio;
