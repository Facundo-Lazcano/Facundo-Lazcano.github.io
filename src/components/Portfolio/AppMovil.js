import React from 'react'

const AppMovil = ({ video, titulo, descripcion, lenguajes }) => {
  return (
    <div>
      <div className='video-pagina'>
        <div className='proyecto'>
          <video src={video} className='celular' controls />
          <div className='descripcion-proyecto'>
            <h4>{titulo}</h4>
            <div className='descripcion'>{descripcion}</div>
            <div style={{ fontWeight: 'bold' }}>Lenguajes Utilizados:</div>
            <div className='lenguajes-total'>
              <div className='lenguaje-usado'>{lenguajes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppMovil
