import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'
import config from 'lib/config'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer-wrapper'>
        <footer className='ext-footer'>
          <div className='footer'>
            <div className='row'>
              <div className='col-md-4 first-menu'>
                <nav className='menu'>
                  <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
                  <Link to='/ayuda/acerca'>Acerca de este sitio</Link>
                  <Link to='/ayuda/acerca'>Contacto</Link>

                  {/* <div className="social-links hidden-md-up">
                    <a href="https://www.facebook.com/Listasparagobernar" target="_blank">
                      <i className="fab fa-facebook fa-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/estamoslistas" target="_blank">
                      <i className="fab fa-instagram fa-lg"></i>
                    </a>
                    <a href="https://twitter.com/Estamos_Listas" target="_blank">
                      <i className="fab fa-twitter fa-lg"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCoIyQqhtC13AV3MlUfFHU_w" target="_blank">
                      <i className="fab fa-youtube fa-lg"></i>
                    </a>
                  </div> */}
                  
                </nav>
              </div>
              <div className='institutional offset-md-4 col-md-4'>
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
          </div>
        </footer>
        <div className='footer-logo-buenaventura'>
          <div className='container'>
            <div className='row'>
              <img src='/lib/frontend/site/home-multiforum/footer-wide.png' className='img-fluid hidden-sm-down' />
              <img src='/lib/frontend/site/home-multiforum/footer-mobile.png' className='img-fluid hidden-md-up' />
            </div>
          </div>
        </div>
        <div className="ext-footer footer-copyright">
          <div className="container">
            <div className='row'>
              <div className='col-lg-10 offset-lg-1'>
                <p className='copyright text-center'>
                La información proporcionada en este sitio web no es información oficial del Gobierno de los EE.UU. y no representa los puntos de vista, ni las posiciones de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID), ni del Gobierno de los EE.UU.
              </p>
                <p className='copyright-links text-center'>
                  <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>{' - '}
                  <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
