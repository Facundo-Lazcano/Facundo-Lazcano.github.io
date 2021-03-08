import React from 'react'
import WebPage from './WebPage'
import lazcano from '../../videos/lazcanoweb.png'

const Lazcano = () => {
  const lenguajes = [
    { name: 'ReactJS' },
    { name: 'NodeJs' },
    { name: 'Express' },
    { name: 'MongoDB' },
    { name: 'Moongose' }
  ]
  return (
    <WebPage
      titulo='Lazcano Colodrero | Pieri Conti'
      descripcion='Página web de estudio jurídico y escribanía. Primer proyecto personal.'
      lenguajes={lenguajes}
      imagenWeb={lazcano}
    />
  )
}

export default Lazcano
