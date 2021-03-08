import React from 'react'
import { Carousel } from 'react-bootstrap'
import Lazcano from './Portfolio/Lazcano'
import Peliculas from './Portfolio/Peliculas'
import Qr from './Portfolio/Qr'

const Trabajos = props => {
  const renderCarousel = () => {
    return (
      <Carousel style={{ color: '#000000' }} interval={100000}>
        <Carousel.Item>
          <Peliculas />
        </Carousel.Item>
        <Carousel.Item>
          <Qr />
        </Carousel.Item>
        <Carousel.Item>
          <Lazcano />
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
