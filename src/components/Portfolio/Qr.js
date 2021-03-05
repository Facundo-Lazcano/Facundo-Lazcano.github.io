import React from 'react'
import qr from '../../videos/qr.mp4'
import AppMovil from './AppMovil'

const Qr = () => {
  return (
    <AppMovil
      titulo='Lector de Qr'
      descripcion='Aplicación parte del curso de Flutter de Fernando Herrera en Udemy. Lector de Qr con mapas integrados y acceso al navegador.'
      video={qr}
      lenguajes={['Flutter']}
    />
  )
}
export default Qr
