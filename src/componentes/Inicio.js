import React from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from "../data/trabajos";
import { ListadoTrabajo } from './ListadoTrabajo';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Silfredo Orozco</strong>. Desarrollador full stack, app , web , App de escritorio, en Barranquilla Colombia.
        Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyectos.
      </h1>
      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web, tener mas visibilidad y relevancia en internet.  <Link to="/contacto">Contacta conmigo "Aqui".</Link>
      </h2>
      <section className="ultimos-proyectos">
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <ListadoTrabajo limite ="2"/>
      </section>
    </div>
  )
}
