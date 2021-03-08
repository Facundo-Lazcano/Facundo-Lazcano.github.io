import React from 'react'

const SobreMi = props => {
  return (
    <div {...props} className='pagina sobre-mi'>
      <h4 className='text-center text-uppercase titulo'>Sobre Mi</h4>
      <div>
        <blockquote className='texto-sobreMi'>
          Mi nombre es Facundo Gaston Lazcano Colodrero. Tengo 25 años y soy de
          Córdoba, Argentina. Mis principales skils son en el Frontent pero
          tengo conocimientos de Fullstack como también de herramientas de
          diseño. Me considero una persona con capacidad para adaptarme a los
          cambios contantes. Soy autodidacta, con capacidad y rapidez para
          aprender nuevos lenguajes y comenzar a aplicarlos. Proactivo y
          enfocado en mis objetivos. Me siento preparado para ingresar el mundo
          IT y aportar desde mi lugar, como así también seguir adquiriendo
          conocimientos y habilidades diariamente.
        </blockquote>
      </div>
    </div>
  )
}

export default SobreMi
