import { Beneficios } from "../../components/Beneficios"
import { Footer } from "../../components/Footer"
import { Marcas } from "../../components/Marcas"
import { Navbar } from "../../components/navbar"

export const LandingPage =()=>{
    return(
        <>
        {/* Contenedor que envuelve la LandingPage */}
        <div className="w-full h-auto ">
            <Navbar/>
            <Marcas/>
            <Beneficios/>
            <Footer/>
        </div>
            
        </>
    )
}