import React from 'react'

export const Contacto = () => {
  return (
    <div className='page pages'>
      <h1 className='heading'>Contacto</h1>

      <form className='contacto' action="mailto:silfredoantonio1991@hotmail.com">
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellido'/>
        <input type="text" placeholder='Emali'/>
        <textarea placeholder='Motivo de contacto'/>
        <input type="submit" value="Enviar"/>
      </form>

    </div>
  )
}
