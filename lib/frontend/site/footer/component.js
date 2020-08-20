import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'
import config from 'lib/config'

export default class Footer extends Component {

  render () {
    return (
      <footer className='ext-footer'>
        <div className='footer'>
          <div className="row">
            <div className="col-md-4 first-menu">
              <nav className='menu'>
                <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
                <Link to='/ayuda/acerca'>Acerca de este sitio</Link>
                <Link to='/ayuda/acerca'>Contacto</Link>
              </nav>
            </div>
            <div className="institutional col-md-4">
              <div className='logo gob'>
                <a href='/'>
                  <img src={config.logoFooter} />
                </a>
              </div>
            </div>
            {/* <div className="col-md-4 second-menu">
              <nav className='menu menu-right'>
                <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>
                <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
              </nav>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <p className='copyright text-center'>
                La información proporcionada en este sitio web no es información oficial del Gobierno de los EE.UU. y no representa los puntos de vista, ni las posiciones de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID), ni del Gobierno de los EE.UU.
              </p>
              <p className="copyright-links text-center">
                <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>{' - '}
                <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
