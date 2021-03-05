import React from 'react'

const SobreMi = props => {
  return (
    <div {...props} className='pagina sobre-mi'>
      <h4 className='text-center text-uppercase titulo'>Sobre Mi</h4>
      <div>
        <blockquote className='texto-sobreMi'>
          Mi nombre es Facundo Gaston Lazcano Colodrero. Tengo 25 años y soy
          Argentino. Me considero una persona con capacidad para adaptarme a los
          cambios contantes. Aprovechando el parate mundial causado por la
          pandemia decidí enfocarme en comenzar mi futuro como programador.
          Siempre de lo malo se pueden sacar cosas buenas. Soy autodidacta, con
          capacidad y rapidez para aprender nuevos lenguajes y comenzar a
          aplicarlos. Proactivo y enfocado en mis objetivos. Estoy buscando la
          oportunidad de ingresar al mundo IT y aportar desde mi lugar, como asi
          tambien seguir incorporando conocimientos día a día
        </blockquote>
      </div>
    </div>
  )
}

export default SobreMi
