import React from 'react'

const WebPage = ({ imagenWeb, titulo, descripcion, lenguajes }) => {
  const renderLenguajes = () =>
    lenguajes.map(lenguaje => {
      return (
        <div key={lenguaje.name} className='lenguaje-usado'>
          {lenguaje.name}
        </div>
      )
    })
  return (
    <div>
      <div className='video-pagina'>
        <div className='proyecto'>
          <img src={imagenWeb} className='web' alt={titulo} />

          <div className='descripcion-proyecto'>
            <h4>{titulo}</h4>
            <div className='descripcion'>{descripcion}</div>
            <div className='lenguajes'>Lenguajes Utilizados:</div>
            <div className='lenguajes-total'>{renderLenguajes()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPage
