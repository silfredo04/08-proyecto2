import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyectos = () => {

  const [pro,setPro] = useState({});

  const params = useParams();


  // se ejecuta una ves cuando se carga este componente
  useEffect(()=>{
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    setPro(proyecto[0]);
  },[]);

  console.log(pro);
  return (
    <div className='page page-work'>
        <div className='mask'>
          <img src={"/images/"+pro.id+".jpg"}/>
        </div>
        <h1 className='heading'>{pro.nombre}</h1>
        <p>{pro.tecnologias}</p>
        <p>{pro.descripcion}</p>
        <a href={pro.url} target="_blank">Ir al proyecto</a>
    </div>
  )
}
