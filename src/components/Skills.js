import React from 'react'
import html5 from '../logos/html5.png'
import css3 from '../logos/css3.png'
import firebase from '../logos/firebase.png'
import flutter from '../logos/flutter.png'
import java from '../logos/java.png'
import javascript from '../logos/javascript.png'
import mongodb from '../logos/mongodb.png'
import nodejs from '../logos/nodejs.png'
import sql from '../logos/sql.png'
import php from '../logos/php.png'
import react from '../logos/react.png'
import reactnative from '../logos/reactnative.png'
import mysql from '../logos/mysql.png'
import heroku from '../logos/heroku.png'

const Skills = () => {
  return (
    <div className='pagina skils'>
      <h4 className='titulo'>Skils</h4>
      <div className=' container skils-tabla'>
        <div>
          <div className='stack'>FrontEnd</div>
          <div className='lenguaje'>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={html5} alt='HTML5-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img
                src={css3}
                alt='CSS3-Logo'
                style={{
                  height: 65,
                  backgroundColor: 'black'
                }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img
                src={javascript}
                alt='javascript-Logo'
                style={{ height: 65 }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={react} alt='react-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={reactnative} alt='rn-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={flutter} alt='flutter-Logo' style={{ height: 65 }} />
            </div>
          </div>
        </div>
        <div>
          <div className='stack'>DataBases</div>
          <div className='lenguaje'>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={mysql} alt='mysql-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={sql} alt='sql-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={mongodb} alt='mongodb-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={firebase} alt='firebase-Logo' style={{ height: 65 }} />
            </div>
          </div>
        </div>
        <div>
          <div className='stack'>BackEnd</div>
          <div className='lenguaje'>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={nodejs} alt='nodejs-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={php} alt='php-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={java} alt='java-Logo' style={{ height: 65 }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <img src={heroku} alt='heroku-Logo' style={{ height: 65 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
