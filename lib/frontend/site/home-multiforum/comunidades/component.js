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

      <div className='container' id='comunidades'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='text-center'>Comunidades activas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sodales nulla, sed semper nisi. Cras lobortis volutpat nunc. Proin tincidunt enim in felis aliquet, a ultricies purus bibendum. Quisque in ultrices lectus. Nulla at urna diam.</p>
          </div>
        </div>
        <div className='row'>
          {
            forums.map( (forum, index) =>  <div className='col-lg-3'>
              <div className={`block-button ${index === selected && 'selected'}`} onClick={() => this.selectForum(index)} >{forum.title}</div>
            </div>)
          }
        </div>
      </div>
      {
        selected !== null && <ComunidadContainer forum={forums[selected]} />
      }
      </div>
    )
  }
}

export default Comunidades
