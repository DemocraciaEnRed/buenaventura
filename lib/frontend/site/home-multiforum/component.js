import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Link } from 'react-router'
import Jump from 'jump.js'
import userConnector from 'lib/frontend/site/connectors/user'
import config from 'lib/config'
import Footer from 'lib/frontend/site/footer/component'
import forumStore from 'ext/lib/stores/forum-store/forum-store'
import ForumContainer from './forum-container/component'
import ForumCard from './forum-card/component'
import Search from './search/component'
import Comunidades from 'lib/frontend/site/home-multiforum/comunidades/component'
import Topics from 'lib/frontend/site/home-multiforum/topics-container/component'

class HomeMultiForum extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      page: 0,
      activeFilter: 'byDate',
      forums: []
    }
  }

  componentDidMount () {
    const {
      activeFilter
    } = this.state;

    // forumStore
    //   .filterBy(activeFilter)
    //   .then((forums) => {
    //     this.setState({
    //       forums,
    //       // las páginas son de a 3 (definido en ext/lib/api/filter.js), entonces si devuelve 3, tal vez hay más
    //       showMore: forums.length === 3
    //     })
    //   })
    //   .catch(console.error)
  }

  handleClick = (name) => {
    const { page } = this.state;

    // forumStore
    //   .filterBy(name)
    //   .then((forums) => {
    //     this.setState({
    //       page,
    //       forums,
    //       activeFilter: name
    //     })
    //   })
    //   .catch(console.error)
  }

  handleMoreClick = () => {
    const {
      page,
      activeFilter
    } = this.state;

    // forumStore
    //   .filterBy(activeFilter, page + 1)
    //   .then((forums) => {
    //     this.setState({
    //       page: this.state.page + 1,
    //       forums: [...this.state.forums, ...forums],
    //       showMore: forums.length === 3
    //     });
    //   })
    //   .catch(console.error)
  }

  handleButtonClick = () => {
    Jump('#consultas')
    // const consultasNode = ReactDOM.findDOMNode(this.refs.consultas)
    // window.scrollTo(0, consultasNode.offsetTop)
  }

  render () {
    if (this.props.user.state.pending) return null

    const {
      showMore,
      activeFilter,
      forums
    } = this.state

    return (
      <div className='ext-site-home-multiforum'>
        <section
          className='cover jumbotron'
          style={{
            backgroundImage: `url('${config.backgroundHome}')`
          }}>
          <div className='jumbotron_body'>
            <div className='container'>
              <img
                src={config.logoCentralHome}
                alt="Logo"
                width="350px"
              />
              <p className='lead highlight'>
                {config.bajadaPlataforma}
              </p>
              <button
                className='btn btn-primary'
                onClick={this.handleButtonClick}
              >
                Quiero participar
              </button>
            </div>
          </div>
        </section>
        <div className='lead-paragraph'>
          <p>
            <span className="skyblue">{config.organizationName}</span> es el puente que une a la comunidad de Buenaventura con sus Concejales y Concejalas,
            <br />
            donde podemos proponer y hacer visibles nuestras ideas para que, conjuntamente con quienes
            <br />
            nos representan en el gobierno, las hagamos realidad y activemos Buenaventura.
          </p>
          <br />
          <p className="bold">
            Seguí estos pasos para participar y debatir de forma efectiva y colaborativa
          </p>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center text-primary">Conocé todo lo que puedes hacer en esta plataforma</h3>
          </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-forum.svg" />
              <p>Foro Debate</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-interact.svg" />
              <p>Interactuar</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-vote.svg" />
              <p>Voto</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-poll.svg" />
              <p>Encuesta</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-cause.svg" />
              <p>Causa</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-range.svg" />
              <p>Range</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-herarchy.svg" />
              <p>Jerarquia</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 text-center home-icon-action">
              <img src="/lib/boot/icon-proposal.svg" />
              <p>Proponé</p>
            </div>
          </div>

        </div>
        {/* <div className='section-icons col-md-10 offset-md-1'>
          <div className='row'>
            <div className='section-icon col-md-4'>
              <img
                className='icon'
                src={config.iconoHomeInformate}
                alt='Informate'
              />
              <div className='text'>
                <h5>Informate</h5> sobre las consultas disponibles
              </div>
            </div>
            <div className='section-icon col-md-4'>
             <img
                className='icon'
                src={config.iconoHomeParticipa}
                alt='Has tu propuesta'
              />
              <div className='text'>
                <h5>Haz tu propuesta</h5> en los ejes de las consultas
              </div>
            </div>
            <div className='section-icon col-md-4'>
             <img
                className='icon'
                src={config.iconoHomeComparti}
                alt='Compartí'
              />
              <div className='text'>
                <h5>Aportá y apoyá!</h5> Da tu opinión, voto o comentarios<br/> ¡Colaboremos entre todxs!
              </div>
            </div>
          </div>
        </div> */}

        <div className='lead-paragraph last col-md-4 offset-md-4 col-xs-12'>
          <i className='icon-arrow-down' onClick={this.handleButtonClick} />
        </div>
        
        <Comunidades />
        <Topics />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className='text-center text-primary'>Buscá</h2>

              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Search />

              </div>
            </div>
          </div>

          {/* {!forums.length && <h3 className="no-result content-center">No hay resultados</h3>} */}
          {/* {!!forums.length && forums.map((forum, key) => (
            <ForumContainer forum={forum} key={forum.id} />
          ))}
          {!!forums.length && showMore &&
            <div className='row content-center'>
              <button className="btn btn-active show-more" onClick={this.handleMoreClick}>
                Cargar más consultas
              </button>
            </div>
          } */}
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeMultiForum)
