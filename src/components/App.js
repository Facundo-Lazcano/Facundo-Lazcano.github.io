import React, { useRef, useEffect } from 'react'
import Header from './Header'
import SobreMi from './SobreMi'
import Trabajos from './Trabajos'
import Contacto from './Contacto'
import NavBar from './NavBar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Skills from './Skills'
import { useWindowScroll } from 'react-use'
import { KeyboardArrowUp } from '@material-ui/icons'
require('./App.css')
require('./Contacto.css')
require('./Skils.css')
require('./SobreMi.css')
require('./NavBar.css')
require('./Header.css')
require('./Portfolio.css')

const App = () => {
  const { y } = useWindowScroll()

  useEffect(() => {
    Aos.init({
      easing: 'ease-out',
      duration: 1000
    })
    Aos.refresh()
  }, [])
  const sobreMi = useRef(null)
  const skills = useRef(null)
  const trabajos = useRef(null)
  const contacto = useRef(null)

  const buttonToTop = () => {
    if (y > 508) {
      return (
        <div
          className='circulo'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <KeyboardArrowUp style={{ marginLeft: 3 }} />
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className='fondo'>
      <NavBar
        sobreMi={sobreMi}
        skills={skills}
        trabajos={trabajos}
        contacto={contacto}
      />
      {buttonToTop()}
      <div>
        <Header />
        <div data-aos='fade-right' ref={sobreMi}>
          <SobreMi />
        </div>
        <div data-aos='fade-down' ref={skills}>
          <Skills />
        </div>
        <div data-aos='flip-left' ref={trabajos}>
          <Trabajos />
        </div>
        <div data-aos='fade-up-right' ref={contacto}>
          <Contacto />
        </div>
      </div>
    </div>
  )
}

export default App
