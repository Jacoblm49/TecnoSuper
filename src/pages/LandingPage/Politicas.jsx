import { useEffect } from 'react'
import info from '../../../public/img/infoIcon.svg'
import { Footer } from '../../components/Footer'
import { NavLink } from 'react-router-dom'


//Logo tecnosuper
import logo from '../../../public/img/Logos/tecnosuper.png';

export const Politicas =()=>{

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <>

            <div className="w-full h-auto flex flex-col items-center">
                <div className="w-full h-autow bg-red-50">
                    <div 
                        className="h-[350px] absolute inset-0 bg-[#792EDE66] opacity-80"
                    >
                    </div>
                    <div 
                        className="w-full h-[350px] bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url('/img/politicas.jpeg')` }}
                    ></div>
                    <div className="w-full h-[350px] absolute top-0 m-auto flex ">
                        <div className="w-3/4 m-auto pb-20">
                            <h4 className="text-center text-secondary-color font-bold text-2xl">Legal</h4>
                            <h2 className="text-center text-white font-semibold text-5xl">Política de Privacidad</h2>
                        </div>
                    </div>
                </div>
               <article>
                <div className='w-full  flex flex-col items-center my-20 gap-10'>
                    <img src={info} alt="" className='w-20'/>
                    <h2 className='text-center text-gray-600 font-semibold text-5xl'>Política de Tratamientos de Datos Personales</h2>
                </div>
                <section className='w-full h-auto my-10'>
                    <div className='w-2/3 m-auto '> 
                        <h3 className='text-gray-700 text-2xl font-semibold p-5'>1. Obejtivo:</h3>
                        <p className='text-lg text-gray-500 tracking-wider'>
                        La presente política tiene como objetivo garantizar el derecho constitucional de todas las personas a conocer, actualizar, rectificar y suprimir la información que se haya recogido sobre ellas, en cumplimiento de la ley 1581 de 2012 y demás normas aplicables.
                        </p>
                    </div>
                </section>
                <section className='w-full h-auto my-10'>
                    <div className='w-2/3 m-auto '> 
                        <h3 className='text-gray-700 text-2xl font-semibold p-5'>2. Alcance:</h3>
                        <p className='text-lg text-gray-500 tracking-wider'>
                        Esta política se aplica a todas las personas, en especial a los administradores del manejo de datos personales, asi como a los encargados del tratamiento de datos personales.
                        </p>
                    </div>
                </section>
                <section className='w-full h-auto my-10'>
                    <div className='w-2/3 m-auto '> 
                        <h3 className='text-gray-700 text-2xl font-semibold p-5'>3. Tratamiento y Finalidad:</h3>
                        <p className='text-lg text-gray-500 tracking-wider'>
                        Se establece el deber de acreditar la puesta a disposición de las políticas de tratamiento de información, así como el contenido mínimo del aviso de privacidad
                        </p>
                    </div>
                </section>
                <section className='w-full h-auto my-10'>
                    <div className='w-2/3 m-auto '> 
                        <h3 className='text-gray-700 text-2xl font-semibold p-5'>4. Deberes:</h3>
                        <p className='text-lg text-gray-500 tracking-wider'>
                        La entidad se compromete a garantizar la seguridad, transparencia y libertad en el tratamiento de los datos personales, bajo el consentimiento previo, expreso e informado del titular de la información.
                        </p>
                    </div>
                </section>
                <section className='w-full h-auto my-10'>
                    <div className='w-2/3 m-auto '> 
                        <h3 className='text-gray-700 text-2xl font-semibold p-5'>5. Derechos de los titulares:</h3>
                        <p className='text-lg text-gray-500 tracking-wider'>
                        Los titulares de los datos personales tienen derecho a conocer, actualizar, rectificar y suprimir su información, así como a solicitar prueba de la autorización otorgada a la entidad para el tratamiento de sus datos.
                        </p>
                    </div>
                </section>
                <section className='w-full h-auto my-10'>
                    <div className='w-2/3 m-auto '> 
                        <h3 className='text-gray-700 text-2xl font-semibold p-5'>6. Autorización de CHACAM TRADING S.A.S.</h3>
                        <p className='text-lg text-gray-500 tracking-wider'>
                        En cumplimiento de la ley 1581 de 2012, la empresa CHACAM TRADING S.A.S. NIT 900674991
                        Solicita la autorización para el tratamiento de datos personales, comprometiéndose a cumplir con los deberes y garantizar los derechos de los titulares de la información.
                        Este modelo de política de tratamiento de datos personales se basa en las disposiciones del 2012, tiene como finalidad garantizar el adecuado tratamiento y protección de la información.
                        </p>
                    </div>
                </section>
               </article>
               <div className='w-full h-auto flex items-center justify-center p-10 gap-10 '>
                <NavLink
                to='/'>
                    <button className='px-10 py-2 text-secondary-color font-semibold border-solid border-2 border-secondary-color rounded-full
                    hover:bg-secondary-color hover:text-white transition duration-500 ease-in-out'>
                        Volver al incio
                    </button>

                </NavLink>
                <button className='px-10 py-2 text-white font-semibold bg-secondary-color rounded-full border-solid border-2 border-secondary-color
                hover:bg-transparent hover:text-secondary-color transition-all duration-500 ease-in-out'>
                    Ir a la tienda
                </button>
                
               </div>

            </div>
            <Footer/>


        </>
    )
}