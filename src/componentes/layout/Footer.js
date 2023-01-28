import React from 'react'

export const Footer = () => {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
  return (
    <footer className="footer">
        Portafolio Silfredo Orozco WEB &copy; Master en react - {añoActual}
    </footer>
  )
}
