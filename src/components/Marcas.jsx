// Carrusel.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// Animación de botón
import '../assets/style/animacionBoton.css';
// Estilos de la barra de desplazamiento
import '../assets/style/carrousel.css';

// Importar imágenes de logos
import supercase from '../../public/img/Logos/Plugin/supercase.png';
import hora from '../../public/img/Logos/Plugin/1hora.png';
import ezviz from '../../public/img/Logos/Plugin/ezviz.png';
import tecnosuper from '../../public/img/Logos/Plugin/tecnosuper.png';

export const Marcas = () => {
    // Configuración del carrusel
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='w-full h-auto flex justify-center items-center flex-col p-10 mt-40'>
            <div className='w-full h-auto flex justify-center items-center flex-col'>
                <h4 className='font-semibold text-secondary-color text-3xl'>Marcas</h4>
                <h2 className='font-semibold text-5xl tracking-wide text-center'>Nuestras Tiendas</h2>
                <p className='font-semibold text-secondary-color mt-8 tracking-wider text-center'>
                    Clic en el supercase para acceder a nuestras tiendas
                </p>
            </div>

            {/* Contenedor para logos con carrusel */}
            <div className='w-full h-auto p-10 mt-20'>
                <Slider {...settings}>
                    {/* Reemplaza estos elementos con los logos reales */}
                    <div className='flex justify-center'>
                        <img src={supercase} alt="Supercase" className='w-full h-auto max-w-[200px]' />
                    </div>
                    <div className='flex justify-center'>
                        <img src={hora} alt="1 Hora" className='w-full h-auto max-w-[200px]' />
                    </div>
                    <div className='flex justify-center'>
                        <img src={ezviz} alt="Ezviz" className='w-full h-auto max-w-[200px]' />
                    </div>
                    <div className='flex justify-center'>
                        <img src={tecnosuper} alt="TecnoSuper" className='w-full h-auto max-w-[200px]' />
                    </div>
                </Slider>
            </div>

            <div className="container__button mt-10">
                <a href="#" className="button type--C">
                    <span className="button__text font-montserrat">Ir a TecnoSuper</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                </a>
            </div>
        </div>
    );
};
