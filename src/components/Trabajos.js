import React from 'react'
import { Carousel } from 'react-bootstrap'
import Peliculas from './Portfolio/Peliculas'
import Qr from './Portfolio/Qr'

const Trabajos = props => {
  const renderCarousel = () => {
    return (
      <Carousel interval={100000}>
        <Carousel.Item>
          <Peliculas />
        </Carousel.Item>
        <Carousel.Item>
          <Qr />
        </Carousel.Item>
      </Carousel>
    )
  }

  return (
    <div className='trabajos' {...props}>
      <h4
        className='text-center text-uppercase titulo'
        style={{ color: '#000000', textShadow: 'inherit' }}
      >
        Portfolio
      </h4>
      {renderCarousel()}
    </div>
  )
}

export default Trabajos
