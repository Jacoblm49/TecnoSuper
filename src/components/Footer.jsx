//Imagenes
import logo from '../../public/img/Logos/tecnosuperHorizontal.png'
import comercio from '../../public/img/industriaComercio.png'
import asin from '../../public/img/asinCodeBlanco.png'
import chacam from '../../public/img/chacamBlanco.png'

//Libreria de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono de Facebook
import { faGlobe, faMessage, faWebAwesome } from '@fortawesome/free-solid-svg-icons';


export const Footer = () =>{
    return(
        <>
            <footer className="w-full h-auto py-20 px-20 bg-[#F5F5F5] flex items-center justify-around">
                <div className='w-auto h-auto p-10 flex flex-col items-center gap-1 '>
                        <img src={logo} alt="tecnoSuper"/>
                        <h4 className='font-semibold tracking-wide text-gray-600'>Tecnosuper, tu mejor alíado.</h4>
                        <div className='w-auto h-auto flex gap-5'>

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
                <div className='w-auto h-auto'>
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
                <div>
                    <h3 className='text-2xl font-bold text-secondary-color tracking-wide mb-5'>Legal</h3>
                    <a href="#" className='font-semibold text-lg text-gray-500 my-10 decoration-solid'>Política de Tratamiento de datos</a>
                    <img src={comercio} alt="Industria y Comercio" />
                </div>

            </footer>
                <div className="w-full h-auto  py-5 px-10 bg-secondary-color flex items-center justify-center">
                    <div className='w-1/2'>
                        <p className='text-white'>Copyright © 2024 TecnoSuper. Diseñado para <span className='font-bold'>Chacam Trading</span> por <span className='font-bold'>Asincode</span></p>               
                    </div>
                    <div className='w-auto  flex gap-10 items-center'>
                        <img src={chacam} alt="" />
                        <img src={asin} alt="" className='h-8'/>
                    </div>
                </div>
        </>
    )
}