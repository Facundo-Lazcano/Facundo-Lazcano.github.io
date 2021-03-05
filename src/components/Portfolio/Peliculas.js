import React from 'react'
import peliculas from '../../videos/peliculas.mp4'
import AppMovil from './AppMovil'

const Peliculas = props => {
  return (
    <div {...props}>
      <AppMovil
        titulo='Aplicación de Peliculas'
        descripcion='Aplicación parte del curso de Flutter de Fernando Herrera en Udemy
  con datos de la API de themoviedb.'
        video={peliculas}
        lenguajes={['Flutter']}
      />
    </div>
  )
}

export default Peliculas
