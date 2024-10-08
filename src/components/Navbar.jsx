// React imports
import { useEffect, useState } from 'react';

// Logo de Tecnocuper
import logo from '../../public/img/Logos/tecnosuper.png';

// Librería para el scroll
import { Link } from 'react-scroll';

// Estilos
import './../assets/style/responsiveLanding.css';

export const Navbar = () => {
  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isOpen, setIsOpen] = useState(false);

  // Efecto para mostrar/ocultar el menú según el estado 'isOpen'
  useEffect(() => {
    const navElement = document.getElementById('ocultarNav');
    if (isOpen) {
      navElement.classList.remove('navLanding-ocultar');
    } else {
      navElement.classList.add('navLanding-ocultar');
    }
  }, [isOpen]);

  return (
    <>
      {/* Botón para abrir el menú en móvil */}
      <div className='w-full h-auto bg-primary-color p-3 hidden navLanding-btn sticky top-0'>
        <button onClick={() => setIsOpen(!isOpen)}>abrir</button>
      </div>

      {/* Contenedor del menú que se oculta o muestra */}
      <div className='navLanding-ocultar' id='ocultarNav'>
        <div className="navLanding-contenedor " id='navLandingModal'>
          <nav className="w-full h-auto py-4 bg-primary-color flex items-center justify-center  navLanding">
            {/* Botón para cerrar el menú */}
            <div className='w-full h-auto flex items-center justify-end px-10 hidden navLanding-contenedor-btn'>
              <button onClick={() => setIsOpen(false)}>cerrar</button>
            </div>

            {/* Navegación principal */}
            <div className="w-5/6 flex justify-center items-center gap-20 navLading__navegacion">
              {/* Enlaces de navegación */}
              <div className="flex gap-10 font-principal-font">
                <ul className="font-semibold text-[#000]">
                  <li className="group relative">
                    <Link to="tiendas" smooth={true} duration={500} offset={-100} className='group-hover:text-secondary-color transition-all duration-300 hover:cursor-pointer'>
                      Nuestras Tiendas
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
                <ul className="font-semibold text-[#000]">
                  <li className="group relative">
                    <Link to="beneficios" smooth={true} duration={500} offset={-100} className='group-hover:text-secondary-color transition-all duration-300 hover:cursor-pointer'>
                      Beneficios
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
              </div>

              {/* Logo */}
              <div className="w-1/8 navLading__navegacion-img">
                <Link to='header' smooth={true} duration={500} offset={-100}>
                  <img className="w-full m-auto" src={logo} alt="logoTecnoSuper" />
                </Link>
              </div>

              {/* Enlaces adicionales */}
              <div className="flex gap-10 font-principal-font">
                <ul className="font-semibold text-[#000]">
                  <li className="group relative">
                    <a href="#" className="group-hover:text-secondary-color transition-all duration-300">Socios</a>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
                <ul className="font-semibold text-[#000]">
                  <li className="group relative">
                    <Link to="contacto" smooth={true} duration={500} className='group-hover:text-secondary-color transition-all duration-300 hover:cursor-pointer'>
                      Contactenos
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Botón para ir a la tienda */}
            <div className="w-1/6 h-auto flex navLanding__iniciar">
              <button className="w-auto m-auto text-white font-semibold items-center bg-secondary-color rounded-full px-4 py-1 tracking-wide border-2 border-transparent
                    hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary-color hover:text-secondary-color
                    ease-in-out duration-500">
                Ir a la Tienda
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
