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
      forums: [],
      showMedia: false,
      mediaContent: {}
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

  showMediaComponent = (contentType) => {
    const mediaContent = {
      voto: {
        title: 'Voto',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      },
      propuesta: {
        title: 'Propuesta',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      },
      causa: {
        title: 'Causa',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      },
      encuesta: {
        title: 'Encuesta',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      },
      prioridad: {
        title: 'Prioridad',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      }
    }
    this.setState({
      showMedia: true,
      mediaContent: mediaContent[contentType],
    });
  }

  closeMediaComponent = () => {
    this.setState({showMedia: false});
  }

  render () {
    if (this.props.user.state.pending) return null

    const {
      showMore,
      activeFilter,
      forums,
      showMedia,
      mediaContent,
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
              <h2 className='lead highlight'>
              Lo qué está entre el cielo y el agua nos une, y mantiene vivas nuestras raices.
              </h2>
            </div>
          </div>
        </section>
        <section className='lead-paragraph'>
          <p>
          Somos el puente que une a la comunidad de Buenaventura con sus Concejales y Concejalas, donde podemos proponer y hacer visibles nuestras ideas para que conjuntamente con quienes nos representan en el gobierno, las hagamos realidad y activemos Buenaventura.
          </p>
          <h3>La diversidad demuestra que tan grandes podemos ser.</h3>
        </section>
        <section className="intro-plataforma">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h3 className="text-center text-primary">Que puedes hacer con esta plataforma</h3>
                <p className="text-center">Dentro de las propuestas que encontraras en esta plataforma puedes realizar cualquiera de estas acciones, ¡CONOCELAS Y PARTICIPA! </p>
                <span className="click text-center">Click en cada imagen</span>
              </div>
            </div>
            {!showMedia &&
            <div className="row">
              <button className="offset-lg-1 col-lg-2 col-sm-6 col-xs-6 text-center home-icon-action" onClick={()=>this.showMediaComponent('voto')}>
                  <div className="icon-wrapper">
                    <img src="/lib/frontend/site/home-multiforum/icon-voto.svg" />
                  </div>
                  <h4>Voto</h4>
              </button>
              <button className="col-lg-2 col-sm-6 col-xs-6 text-center home-icon-action" onClick={()=>this.showMediaComponent('propuesta')}>
                  <div className="icon-wrapper">
                    <img src="/lib/frontend/site/home-multiforum/icon-propuesta.svg" />
                  </div>
                  <h4>Propuesta</h4>
              </button>
              <button className="col-lg-2 col-sm-6 col-xs-6 text-center home-icon-action" onClick={()=>this.showMediaComponent('causa')}>
                  <div className="icon-wrapper">
                    <img src="/lib/frontend/site/home-multiforum/icon-causa.svg" />
                  </div>
                  <h4>Causa</h4>
              </button>
              <button className="col-lg-2 col-sm-6 col-xs-6 text-center home-icon-action" onClick={()=>this.showMediaComponent('encuesta')}>
                  <div className="icon-wrapper">
                    <img src="/lib/frontend/site/home-multiforum/icon-encuesta.svg" />
                  </div>
                  <h4>Encuesta</h4>
              </button>
              <button className="col-lg-2 offset-lg-0 offset-sm-3 offset-xs-3 col-sm-6 col-xs-6 text-center home-icon-action" onClick={()=>this.showMediaComponent('prioridad')}>
                  <div className="icon-wrapper">
                    <img src="/lib/frontend/site/home-multiforum/icon-voto.svg" />
                  </div>
                  <h4>Prioridad</h4>
              </button>
            </div>
            }
            {showMedia &&
            <div className="row">
              <div className="media col-lg-10 offset-lg-1">
                <div className="home-icon-action mr-0">
                  <div className="icon-wrapper ">
                      <img src="/lib/frontend/site/home-multiforum/icon-voto.svg" />
                  </div>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">{mediaContent.title}</h5>
                  <p>{mediaContent.description}</p>
                  <button className="btn button-close" onClick={this.closeMediaComponent}>Cerrar</button>
                </div>
              </div>
            </div>
            }
          </div>
        </section>
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
        
        <Comunidades />
        <Topics />
          
          <section className="container">
            <div className="row">
              <div className="col-lg-12">
                <Search />

              </div>
            </div>
          </section>

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
