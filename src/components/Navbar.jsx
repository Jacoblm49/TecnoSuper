//Importar imagen del header desde carpeta public
import banner from '../../public/img/banner1.png';
//Logo tecnosuper
import logo from '../../public/img/Logos/tecnosuper.png';

export const Navbar = () => {
  return (
    <>
      <header className="w-full h-auto flex flex-col ">
        <nav className="w-full h-auto py-4 bg-primary-color flex items-center justify-evenly">

          <div className="w-5/6 flex justify-center items-center gap-20 ">
            
            <div className="flex gap-10 font-principal-font">
              <ul className="font-semibold text-[#000]">
                <li class="group relative">
                    <a href="" class="group-hover:text-secondary-color transition-all duration-300">Nuestras Tiendas</a>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
              <ul className="font-semibold text-[#000]">
                <li class="group relative">
                    <a href="" class="group-hover:text-secondary-color transition-all duration-300">Beneficios</a>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
              
            </div>

            <div className="w-1/8 ">
              <img className="w-2/3 m-auto" src={logo} alt="logoTecnoSuper" />
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
                    <a href="" class="group-hover:text-secondary-color transition-all duration-300">Contactenos</a>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </div>
          
          </div>
            <div className="w-34 h-auto ">
              <button
                className="text-white font-semibold items-center bg-secondary-color rounded-full px-4 py-1 tracking-wide border-2 border-transparent
                    hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary-color hover:text-secondary-color
                    ease-in-out duration-500"
              >
                Ir a la Tienda
              </button>
            </div>
        </nav>

        <div className="w-full h-auto">
          <img className="w-full h-auto" src={banner} alt="celulares_credito" />
        </div>
      </header>
    </>
  );
};
