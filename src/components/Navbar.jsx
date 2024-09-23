export const Navbar = ( )=>{
    return(
        <>
        <nav className="w-full h-auto p-6 bg-primary-color flex justify-between items-center">
            <div >
                <img src="" alt="logoTecnoSuper" />
            </div>
            <div className="w-auto h-auto flex gap-10"> 
                <ul className="font-semibold text-[#792EDE] ">
                    <li> <a href="">Nuestras Tiendas</a></li>
                </ul>
                <ul className="font-semibold text-[#792EDE]">
                    <li> <a href="">Beneficios</a></li>
                </ul>
                <ul className="font-semibold text-[#792EDE]">
                    <li> <a href="">Socios</a></li>
                </ul>
                <ul className="font-semibold text-[#792EDE]">
                    <li> <a href="">Conócenos</a></li>
                </ul>
                
                <ul className="font-semibold text-[#792EDE]">
                    <li> <a href="">Contáctanos</a></li>
                </ul>
            </div>
            <div className="w-auto h-auto">
                <button className="text-white font-semibold items-center bg-secondary-color rounded-full px-4 py-1 tracking-wide">Ir a la Tienda</button>
            </div>
        </nav>
        </>
    )
}