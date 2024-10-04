//Diseño responvise
import './../../assets/style/responsiveLanding.css'

import { useEffect } from "react"
import { Beneficios } from "../../components/Beneficios"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Marcas } from "../../components/Marcas"
import { Navbar } from "../../components/navbar"

export const LandingPage =()=>{

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <>
        {/* Contenedor que envuelve la LandingPage */}
        <div className="w-full h-auto ">
            <Navbar/>
            <div id="header">
                <Header/>
            </div>
            <div id="tiendas">
                <Marcas/>
            </div>
            <div id="beneficios">
                <Beneficios/>
            </div>
            <div id="contacto">
                <Footer/>
            </div>
        </div>
            
        </>
    )
}