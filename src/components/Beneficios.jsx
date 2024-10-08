// libreria de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';

export const Beneficios = () => {
    return (
        <>
            <div className="w-full h-auto mt-40 relative mb-10">
                <div className="absolute inset-0 bg-[#792EDE80] opacity-50"></div>
                <div 
                    className="w-full h-[650px] sm:h-[800px] md:h-[1000px] bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url('/img/bannerBeneficios.png')` }}
                ></div>

                <div  className="w-full h-full absolute top-0 m-auto flex"> 
                    <div className="w-full max-w-6xl h-auto py-10 px-4 md:px-10 bg-white m-auto rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div className="flex items-center justify-between group hover:text-white hover:bg-secondary-color transition-all duration-500 rounded-2xl">
                            <div className='w-1/4'>
                                <FontAwesomeIcon icon={faHippo}
                                    className='p-5 text-secondary-color rounded-full border-[10px] border-secondary-color
                                    group-hover:text-white group-hover:border-white transition-all duration-300 text-4xl md:text-5xl sm:text-2xl' /> 
                            </div>
                            <div className='w-3/4 p-5'>
                                <h3 className='font-semibold text-2xl group-hover:text-4xl'>Organización y Convivencia</h3>
                                <p className='text-gray-400 group-hover:text-white group-hover:text-xl'>
                                    Encuentra todo lo que necesitas en un solo lugar, con categorías claramente definidas y una interfaz organizada.
                                </p>
                            </div>
                        </div>

                        {/* Repite las tarjetas de beneficios como en el código original */}

                        <div className="flex items-center justify-between group hover:text-white hover:bg-secondary-color transition-all duration-500 rounded-2xl">
                            <div className='w-1/4'>
                                <FontAwesomeIcon icon={faHippo}
                                    className='p-5 text-secondary-color rounded-full border-[10px] border-secondary-color
                                    group-hover:text-white group-hover:border-white transition-all duration-300 text-4xl md:text-5xl sm:text-2xl' /> 
                            </div>
                            <div className='w-3/4 p-5'>
                                <h3 className='font-semibold text-2xl group-hover:text-4xl'>Calidad Garantizada</h3>
                                <p className='text-gray-400 group-hover:text-white group-hover:text-xl'>
                                    Nos esforzamos por ofrecer solo productos de la más alta calidad, respaldados por nuestras marcas de confianza.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between group hover:text-white hover:bg-secondary-color transition-all duration-500 rounded-2xl">
                            <div className='w-1/4'>
                                <FontAwesomeIcon icon={faHippo}
                                    className='p-5 text-secondary-color rounded-full border-[10px] border-secondary-color
                                    group-hover:text-white group-hover:border-white transition-all duration-300 text-4xl md:text-5xl sm:text-2xl' /> 
                            </div>
                            <div className='w-3/4 p-5'>
                                <h3 className='font-semibold text-2xl group-hover:text-4xl'>Política de Privacidad Transparente</h3>
                                <p className='text-gray-400 group-hover:text-white group-hover:text-xl'>
                                    Protegemos tus datos personales con una política de privacidad clara y transparente.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between group hover:text-white hover:bg-secondary-color transition-all duration-500 rounded-2xl">
                            <div className='w-1/4'>
                                <FontAwesomeIcon icon={faHippo}
                                    className='p-5 text-secondary-color rounded-full border-[10px] border-secondary-color
                                    group-hover:text-white group-hover:border-white transition-all duration-300 text-4xl md:text-5xl sm:text-2xl' /> 
                            </div>
                            <div className='w-3/4 p-5'>
                                <h3 className='font-semibold text-2xl group-hover:text-4xl'>Diversidad de Marcas</h3>
                                <p className='text-gray-400 group-hover:text-white group-hover:text-xl'>
                                    Ofrecemos una amplia gama de marcas, incluyendo opciones de productos propios y de terceros para satisfacer todas tus necesidades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
