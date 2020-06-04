import React from 'react'
import { Link } from 'react-router'
import Flickity from 'ext/node_modules/flickity'
import urlBuilder from 'lib/backend/url-builder'
import forumStore from 'lib/frontend/stores/forum-store/forum-store'
import topicStore from 'lib/frontend/stores/topic-store/topic-store'
import TopicCard from './topicCard'

class ComunidadContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: [],
      loading: null,
      forumInfo: null,
      options: {
        cellAlign: 'left',
        draggable: false,
        // friction: 0.2,
        contain: true,
        pageDots: false,
        groupCells: window.matchMedia('(min-width: 1024px)').matches ? 3 : 1,
        autoPlay: true,
      }
    }
    this.flkty = null
  }

  componentWillMount = () => {
    console.log('Mounted, now fetch topics!')
    this.fetchTopics(this.props.forum)
  }

  componentWillReceiveProps = ({forum}) => {
    console.log('Updated! now fetch topics!')
    this.setState({
      loading: true
      }, this.fetchTopics(forum))
    // forumStore
    //   .filterBy(activeFilter)
    //   .then((forums) => {
    //     this.setState({
    //       forums,
    //       // las páginas son de a 3 (definido en ext/lib/api/filter.js), entonces si devuelve 3, tal vez hay más
    //       showMore: forums.length === 3
    //     })
    //   })
    //   .catch((e) => console.error(e))
    // if (this.flkty) this.flkty.destroy()
    // const options = {
    //   cellAlign: 'left',
    //   draggable: false,
    //   // friction: 0.2,
    //   contain: true,
    //   pageDots: false,
    //   groupCells: window.matchMedia('(min-width: 1024px)').matches ? 3 : 1
    // 
  }

  componentWillUnmount () {
    if (this.flkty) this.flkty.destroy()
  }

  fetchTopics = (forum) => {

    console.log('-- fetch topics!')
    console.log('-- ', forum.name)
    console.log('-- ', forum.id)
    if (this.flkty) this.flkty.destroy()
    this.setState({
      loading: true
    })
    Promise.all([
      forumStore.findOneByName(forum.name),
      topicStore.findAll({ forum: forum.id })
    ]).then(([forum, topics]) => {
      console.log('forum', forum)
      console.log('topics', topics)
      this.setState({
        forumInfo: forum,
        topics: topics[0],
        loading: false
      })
      this.flkty = new Flickity(this.refs.carrusel, this.state.options)
    setInterval(this.flkty.resize, 2000)
    }).catch((e) => console.error(e))
  }
  
  

  render () {
    let { loading, topics } = this.state
    let { forum } = this.props
    return (
      <div className='container'>
        {
          loading && 
          <div className="row" >
            <div className='col-lg-12'>
              <h4 className="text-center">Cargando...</h4>
            </div>
          </div>
        }
        {
          !loading &&
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center'>{forum.title} - Ejes</h2>
            </div>
            <div className='col-lg-12'>
              <div className='topics-container' ref='carrusel'>
                {topics.length && topics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic}/>
                ))}
              </div>              
              {
                topics.length == 0 && <h4>No hay ejes creados en esta comunidad</h4>
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default ComunidadContainer
