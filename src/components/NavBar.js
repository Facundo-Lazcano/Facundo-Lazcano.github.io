import React from 'react'

const NavBar = ({ sobreMi, skills, trabajos, contacto }) => {
  return (
    <div className='botones'>
      <button
        className='boton'
        onClick={() => {
          window.scrollTo({
            top: sobreMi.current.offsetTop,
            behavior: 'smooth'
          })
        }}
      >
        <div>Sobre Mi</div>
      </button>
      <button
        className='boton'
        onClick={() => {
          window.scrollTo({
            top: skills.current.offsetTop,
            behavior: 'smooth'
          })
        }}
      >
        <div>Skills</div>
      </button>
      <button
        className='boton'
        onClick={() => {
          window.scrollTo({
            top: trabajos.current.offsetTop,
            behavior: 'smooth'
          })
        }}
      >
        <div>Portfolio</div>
      </button>
      <button
        className='boton'
        onClick={() => {
          window.scrollTo({
            top: contacto.current.offsetTop,
            behavior: 'smooth'
          })
        }}
      >
        <div className='sm-4'>
          <div>Contacto</div>
        </div>
      </button>
    </div>
  )
}
export default NavBar
