import React from 'react'
import { Link } from 'react-router'
import urlBuilder from 'lib/backend/url-builder'
import forumStore from 'ext/lib/stores/forum-store/forum-store'
import ComunidadContainer from '../comunidad-container/component'

class Comunidades extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0,
      activeFilter: 'byDate',
      forums: [],
      selected: null,
      loading: null
    }
  }

  componentWillMount = () => {
    console.log('-----------')
    const {
      activeFilter
    } = this.state

    forumStore
      .findAll()
      .then((forums) => {
        this.setState({
          forums,
          // las páginas son de a 3 (definido en ext/lib/api/filter.js), entonces si devuelve 3, tal vez hay más
          showMore: forums.length === 3
        })
      })
      .catch(console.error)
  }

  selectForum = (index) => {
    this.setState({
      selected: index
    })
  }

  render () {
    let { forums, selected } = this.state
    return (
      <div>
        <section className="intro-comunidades">
          <div className="container-fluid">
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <h2 className='text-center'>Comunidades activas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sodales nulla, sed semper nisi. Cras lobortis volutpat nunc. Proin tincidunt enim in felis aliquet, a ultricies purus bibendum. Quisque in ultrices lectus. Nulla at urna diam.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="comunidades">
          <div className="container">
            <div className='row'>
              {
                forums.map( (forum, index) =>  <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                  <div className={`block-button ${index === selected && 'selected'}`} onClick={() => this.selectForum(index)} >{forum.title}</div>
                </div>)
              }
            </div>
          </div>
          {
            selected !== null && <ComunidadContainer forum={forums[selected]} />
          }
        </section>
      </div>
    )
  }
}

export default Comunidades
