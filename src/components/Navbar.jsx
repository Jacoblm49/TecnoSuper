//React
import { useEffect, useState } from 'react';

//Logo tecnosuper
import logo from '../../public/img/Logos/tecnosuper.png';

//Libreria para el scroll
import { Link } from 'react-scroll';

//Responsive
import './../assets/style/responsiveLanding.css'



export const Navbar = () => {

  //UseState para manejar el estado de la modal del nav cuando esta en diseño responsive movil
  const [isOpen, setIsOpen] = useState(false);


  useEffect(()=>{
    console.log(isOpen)
    if(isOpen){
      document.getElementById('ocultarNav').classList.remove('navLanding-ocultar')
    }else{
      document.getElementById('ocultarNav').classList.add('navLanding-ocultar')
    }
  },[isOpen])


  

  return (
    <>
      <div className='w-full h-auto bg-primary-color p-3 hidden navLanding-btn'>
        <button onClick={()=>{setIsOpen(!isOpen)}}>abrir</button>
      </div>
      <div className='navLanding-ocultar' id='ocultarNav'>
    <div className="navLanding-contenedor " id='navLandingModal'>
        <nav className="w-full h-auto py-4 bg-primary-color flex items-center justify-center  navLanding" >
        <div className='w-full h-auto flex items-center justify-end px-10 hidden navLanding-contenedor-btn' onClick={()=>{setIsOpen(false)}}>
          <button>cerrar</button>
        </div>
          <div className="w-5/6 flex justify-center items-center gap-20 navLading__navegacion">
            
            <div className="flex gap-10 font-principal-font navLading__navegacion-1">
              <ul className="font-semibold text-[#000]">
                <li class="group relative">
                      <Link
                        to="tiendas"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className='group-hover:text-secondary-color transition-all duration-300 hover:cursor-pointer'
                      >
                        Nuestras Tiendas
                      </Link>
                      
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
              <ul className="font-semibold text-[#000]">
                <li class="group relative">
                      <Link
                         to="beneficios"
                         smooth={true}
                         duration={500}
                         offset={-100}
                         className='group-hover:text-secondary-color transition-all duration-300 hover:cursor-pointer'
                      >
                        Beneficios
                      
                      </Link>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
              
            </div>

            <div className="w-1/8 navLading__navegacion-img">
              <Link
               to='header'
               smooth={true}
               duration={500}
               offset={-100}
              >
                <img className="w-full m-auto" src={logo} alt="logoTecnoSuper"/>
              </Link> 
            </div>

            <div className="flex gap-10 font-principal-font navLading__navegacion-2">
              <ul className="font-semibold text-[#000]">
                <li class="group relative">
                    <a href="" class="group-hover:text-secondary-color transition-all duration-300">Socios</a>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            <ul className="font-semibold text-[#000]">
                <li class="group relative">
                      <Link
                       to="contacto"
                       smooth={true}
                       duration={500}
                       className='group-hover:text-secondary-color transition-all duration-300 hover:cursor-pointer'
                      >
                        Contactenos
                      </Link>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </div>
          
          </div>
            <div className="w-1/6 h-auto  flex navLanding__iniciar">
              <button
                className="w-auto  m-auto text-white font-semibold items-center bg-secondary-color rounded-full px-4 py-1 tracking-wide border-2 border-transparent
                    hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary-color hover:text-secondary-color
                    ease-in-out duration-500"
              >
                Ir a la Tienda
              </button>
            </div>
        </nav>
        
      </div>

      </div>


    </>
  );
};
