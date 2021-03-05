import React from 'react'
import foto from '../logos/facundo.png'
import { Mail, GitHub, WhatsApp, LinkedIn, Copyright } from '@material-ui/icons'

const Contacto = props => {
  return (
    <div {...props}>
      <div className='contacto'>
        <h4 className='text-center text-uppercase titulo'>Contacto</h4>
        <div className='row-contacto'>
          <div className='marco-foto'>
            <img src={foto} alt='foto-personal' />
          </div>
          <div className='redes'>
            <a
              href='http://wa.link/08d08h'
              target='_blank'
              rel='noreferrer'
              className='red'
            >
              <WhatsApp className='icono-red' fontSize='large' />
              <div>+5493512697600</div>
            </a>

            <a
              href='https://www.linkedin.com/in/facundo-lazcano/'
              target='_blank'
              rel='noreferrer'
              className='red'
            >
              <LinkedIn className='icono-red' fontSize='large' />
              <div>Facundo Lazcano</div>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Facundo-Lazcano'
              className='red'
            >
              <GitHub className='icono-red' fontSize='large' />
              <div>Facundo-Lazcano</div>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='mailto:faculazcano14@gmail.com'
              className='red'
            >
              <Mail className='icono-red' fontSize='large' />
              <div>faculazcano14@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h6 style={{ color: '#ffffff' }}>
          Facundo Lazcano <Copyright /> 2021
        </h6>
      </div>
    </div>
  )
}

export default Contacto
