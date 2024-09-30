
//Logo tecnosuper
import logo from '../../public/img/Logos/tecnosuper.png';

//Libreria para el scroll
import { Link } from 'react-scroll';


export const Navbar = () => {
  return (
    <>
        <nav className="w-full h-auto py-4 bg-primary-color flex items-center justify-center sticky top-0 z-10">

          <div className="w-full flex justify-center items-center gap-20 ">
            
            <div className="flex gap-10 font-principal-font">
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

            <div className="w-1/8 ">
              <Link
               to='header'
               smooth={true}
               duration={500}
               offset={-100}
              >
                <img className="w-full m-auto" src={logo} alt="logoTecnoSuper"/>
              </Link> 
            </div>

            <div className="flex gap-10 font-principal-font">
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
            <div className="w-34 h-auto absolute right-10">
              <button
                className="text-white font-semibold items-center bg-secondary-color rounded-full px-4 py-1 tracking-wide border-2 border-transparent
                    hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary-color hover:text-secondary-color
                    ease-in-out duration-500"
              >
                Ir a la Tienda
              </button>
            </div>
        </nav>
    </>
  );
};
