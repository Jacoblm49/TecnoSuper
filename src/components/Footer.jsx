//Imagenes
import logo from '../../public/img/Logos/tecnosuperHorizontal.png'
import comercio from '../../public/img/industriaComercio.png'
import asin from '../../public/img/asinCodeBlanco.png'
import chacam from '../../public/img/chacamBlanco.png'

//Libreria de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono de Facebook
import { faGlobe, faMessage, faWebAwesome } from '@fortawesome/free-solid-svg-icons';

//Hook para rutas
import { NavLink } from 'react-router-dom';


export const Footer = () =>{
    return(
        <>
    <footer className="w-full h-auto py-80 px-4 md:px-20 bg-[#F5F5F5] flex flex-col md:flex-row items-center justify-center sm:py-20">
        <div className='w-full md:w-auto h-auto p-10 flex flex-col items-center  gap-1 py-80 sm:py-20'>
            <img src={logo} alt="tecnoSuper" className="w-30 h-auto" />
            <h4 className='font-semibold tracking-wide text-gray-600 text-center '>Tecnosuper, tu mejor alíado.</h4>
            <div className='w-auto h-auto flex gap-5  justify-center'>
                <div>
                    <FontAwesomeIcon icon={faFacebook} 
                        className='bg-white p-2 size-8 rounded-xl text-secondary-color border-none hover:bg-secondary-color hover:text-white hover:cursor-pointer transition-all duration-500' />
                </div>
                <div>
                    <FontAwesomeIcon icon={faInstagram} 
                        className='bg-white p-2 size-8 rounded-xl text-secondary-color border-none hover:bg-secondary-color hover:text-white hover:cursor-pointer transition-all duration-500' />
                </div>
                <div>
                    <FontAwesomeIcon icon={faFacebookMessenger} 
                        className='bg-white p-2 size-8 rounded-xl text-secondary-color border-none hover:bg-secondary-color hover:text-white hover:cursor-pointer transition-all duration-500' />
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} 
                        className='bg-white p-2 size-8 rounded-xl text-secondary-color border-none hover:bg-secondary-color hover:text-white hover:cursor-pointer transition-all duration-500' />
                </div>
                <div>
                    <FontAwesomeIcon icon={faGlobe} 
                        className='bg-white p-2 size-8 rounded-xl text-secondary-color border-none hover:bg-secondary-color hover:text-white hover:cursor-pointer transition-all duration-500' />
                </div>
            </div>
        </div>
        <div className='w-full md:w-auto h-auto mb-10 md:mb-0 flex items-center justify-center flex-col'>
            <h3 className='text-2xl font-bold text-secondary-color tracking-wide mb-5'>CONTÁCTANOS</h3>
            <p className='text-gray-500 my-2 text-left'>
                <span className='text-gray-600 font-semibold'>Atención al cliente: </span>
                +57 3244118131 o +57 3245974835
            </p>
            <p className='text-gray-500 my-2 text-left'>
                <span className='text-gray-600 font-semibold'>Correo: </span>
                ecommerce@tecnosuper.com.co
            </p>
            <p className='text-gray-500 my-2 text-left'>
                <span className='text-gray-600 font-semibold'>Horarios: </span>
                Lunes a Viernes de 8AM a 5PM
            </p>
            <p className='text-gray-500 my-2 text-left'>Festivos estaremos recargando energías</p>
        </div>
        <div className='w-full md:w-auto flex items-center justify-center flex-col'>
            <h3 className='text-4xl font-bold text-secondary-color tracking-wide mb-5'>Legal</h3>
            <NavLink to="/PoliticaDatos">
                <a href="#" className='font-semibold text-lg text-gray-500 my-10 hover:text-secondary-color transition-all duration-500'>Política de Tratamiento de datos</a>
            </NavLink>
            <img src={comercio} alt="Industria y Comercio" className="w-30 h-auto" />
        </div>
    </footer>
    <div className="w-full h-auto py-5 px-4 md:px-10 bg-secondary-color flex items-center justify-center">
        <div className='w-full max-w-6xl flex flex-col md:flex-row justify-between items-center'>
            <p className='text-white text-center'>Copyright © 2024 TecnoSuper. Diseñado para <span className='font-bold'>Chacam Trading</span> por <span className='font-bold'>Asincode</span></p>
            <div className='flex gap-4 items-center mt-4 md:mt-0'>
                <img src={chacam} alt="Chacam" className="h-8" />
                <img src={asin} alt="Asincode" className="h-8" />
            </div>
        </div>
    </div>
</>

    )
}