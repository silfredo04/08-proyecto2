import React from 'react';
import {trabajos} from "../data/trabajos";
import {Link } from 'react-router-dom';

export const Portafolio = () => {
  console.log(trabajos);
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <section className='work'>
          {
            trabajos.map(trabajo => {
              return(
                <article key={trabajo.id} className='work-item'>
                  <div className='mask'>
                    <img src={"/images/"+trabajo.id+".jpg"}/>
                  </div>
                  <span>Categorias: {trabajo.categorias}</span>
                  <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                  <h3>Tecnologia: {trabajo.tecnologias}</h3>
                </article>
              );
            })
          }
      </section>
    </div>
  )
}
