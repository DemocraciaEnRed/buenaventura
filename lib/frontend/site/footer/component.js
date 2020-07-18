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
            <div className="col-md-4 second-menu">
              <nav className='menu menu-right'>
                <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>
                <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
              </nav>
            </div>
          </div>
            
          <p className='copyright text-center'>
            Los contenidos de esta página están licenciados bajo <a href='https://www.gnu.org/licenses/gpl-3.0-standalone.html'>GNU General Public License v3.0</a>
          </p>
        </div>
      </footer>
    )
  }
}
