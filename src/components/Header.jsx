//Importar imagen del header desde carpeta public
import banner from '../../public/img/banner1.png';


import Marquee from "react-fast-marquee";

export const Header = ()=>{
return(
    <>  
    <header >
        <div className='w-full h-auto bg-secondary-color py-5 hover:cursor-default'>
            <Marquee>
                <ul className='w-full flex gap-20 items-center justify-between text-white font-bold '>
                    <li>
                        Televisores
                    </li>
                    <li>
                        Cámaras
                    </li>
                    <li>
                        Impresoras
                    </li>
                    <li>
                        Tablets
                    </li>
                    <li>
                        Computadoras
                    </li>
                    <li>
                        Estuches
                    </li>
                    <li>
                        Audio
                    </li>
                    <li>
                        Scooters
                    </li>
                    <li>
                        Accesorios
                    </li>
                    <li>
                        Celulares
                    </li>
                    <li>Relojes inteligentes</li>
                    <li>Auriculares inalámbricos</li>
                    <li>Discos duros externos</li>
                    <li>Monitores</li>
                    <li>Routers</li>
                    <li>Drones</li>
                    <li>Proyectores</li>
                    <li>Videocámaras</li>
                    <li>Teclados mecánicos</li>
                    <li>Mouses gaming</li>
                    <li>Cargadores portátiles</li>
                    <li>Asistentes virtuales</li>
                    <li>Altavoces inteligentes</li>
                    <li>Equipos de gaming</li>
                    <li>Gafas de realidad virtual</li>
                    <li>Tarjetas gráficas</li>
                    <li>Cables y adaptadores</li>
                </ul>

            </Marquee>

        </div>
        <div className="w-full h-auto">
            <img className="w-full h-auto" src={banner} alt="celulares_credito" />
        </div>
    </header>

    </>
)
        
}


