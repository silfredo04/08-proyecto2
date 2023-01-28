import React from 'react';
import { Routes,Route,NavLink,BrowserRouter, Navigate } from 'react-router-dom';
import { Contacto } from '../componentes/Contacto';
import { Curriculum } from '../componentes/Curriculum';
import { Inicio } from '../componentes/Inicio';
import { Footer } from '../componentes/layout/Footer';
import { Header } from '../componentes/layout/Header';
import { Portafolio } from '../componentes/Portafolio';
import { Proyectos } from '../componentes/Proyectos';
import { Servicios } from '../componentes/Servicios';

export const RutasPrincipales = () => {
  return (
    <BrowserRouter>

        {/* Header y navegacion */}
        <Header/>

        {/*  contenido central */}
        <section className="contenido">
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/servicios" element={<Servicios/>}/>
                <Route path="/portafolio" element={<Portafolio/>}/>
                <Route path="/curriculum" element={<Curriculum/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/proyecto/:id" element={<Proyectos/>}/>
                <Route path="*" element={<div className='page'><h1 className='heading'>Error 404</h1></div>}/>
            </Routes>
        </section>
        {/*  footer */}
        <Footer/>
    </BrowserRouter>
  )
}
