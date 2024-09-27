//Estilos
//Animacion boton
import '../assets/style/animacionBoton.css'
//Estilos scroll bar
import '../assets/style/scrollbar.css'

//Importar imagenes de logos
import supercase from '../../public/img/Logos/Plugin/supercase.png'

export const Marcas =()=>{
    return(
        <>
       <div className='w-full h-auto flex justify-center items-center flex-col p-10 mt-40'>
    <div className='w-full h-auto flex justify-center items-center flex-col'>
        <h4 className='font-semibold text-secondary-color text-3xl'>Marcas</h4>
        <h2 className='font-semibold text-5xl tracking-wide text-center'>Nuestras Tiendas</h2>
        <p className='font-semibold text-secondary-color mt-8 tracking-wider text-center'>
            Clic en el supercase para acceder a nuestras tiendas 
        </p>
    </div>

  {/* Contenedor para logos con scroll horizontal */}
  <div className='w-full h-auto p-10 mt-20 overflow-x-auto scroll-custom'>
        <div className='flex w-[calc(100vw*4/5)] space-x-10'>
            {/* Elementos individuales */}
            
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
            <div className='min-w-[25%] w-80 h-auto'>
                <img src={supercase} alt="supercase" />
            </div>
        </div>
    </div>

    <div className="container__button mt-210">
        <a href="#" className="button type--C">
            <span className="button__text font-montserrat">Ir a TecnoSuper</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
        </a>
    </div>
</div>


        </>
    )
}